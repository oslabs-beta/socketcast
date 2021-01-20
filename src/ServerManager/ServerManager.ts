import http from 'http';
import express from 'express';
const WebSocket = require('ws')
import { v4 as uuidv4 } from 'uuid';
import cors from 'cors';


// const SocketEvent = require('./SocketEvent');


import ServerAbstract from './ServerAbstract';

class ServerManager {
    //define interfaces (from type.d.ts)
    _servers: Servers

    constructor() {
        // Denoted with _ because this should not be modified directly. 
        this._servers = {};
    }

    /**
     * Returns an object containing our servers
     */
    getServers = () => {
        return this._servers;
    }
    

    // TODO
    /**
     * getServer
     * Get an individual ServerAbstract by the id of the server
     * @param {*} id 
     */
    getServer = (id: string) => {
        return this._servers[id];
    }

    // // TODO Create listeners to listen on close of a server. When a server is closed, we should remove it from _servers. We may also want to execute a callback provided by the user.

    /**
     * 
     * @param {Object} config - Configuration object for socket.io server
     * @param {String} config.name - Configuration object for socket.io server
     * @param {Integer} config.port - Port to run the socket.io server on
     * @param {Array[SocketEvent]} config.events - List of SocketEvent that are exposed for client/server to communicate on. Events should be of type SocketEvent
     * @param {Function} config.onConnection - Callback for when a client connects to the server
     * @param {Function} config.onMessage
     * @returns {Promise} - The promise 
     */

    
    createServer = (config: Config ) => {
        //events implentation for later
        const { name, port, onConnection, onMessage, events } = config;
        const app = express();
        const server = new http.Server(app);
        const id = uuidv4();
         app.use(cors());

        
        const wss = new WebSocket.Server({ server })

        //what is type of ws?
        wss.on('connection', (ws: any, req: object) => {
            if (onConnection) onConnection();
            ws.on('message', (msg: string) => {
                console.log(`server ${id} received message: msg`);
                if(onMessage) onMessage(msg);
            })

        });

        //what is shape of message?
        const broadcast = (message: object) => {
            for(let client of wss.clients) {
                client.send(message);
            }
        }

        this._servers[id] = new ServerAbstract(wss, { broadcast }, name);

        return new Promise((resolve: any, reject) => {
            server.listen(port || 3000, () => {
                console.log(`Server ${id} created on ${port}`);
                resolve({
                    id,
                    name,
                    status: 'RUNNING'
                });
            });
        });
    }

   

    // /**
    //  * Modify a server currently running. This will effectively stop the server and create a new one with the new config, but with the same id.
    //  * @param {*} id 
    //  * @param {*} config 
    //  */
    // modifyServer = async (id, config) => {
    //     try {
    //         await this.stopAndRemoveServer(id);
    //         await this.createServer(config); // TODO If I want to await this, createServer needs to return a Promise
    //     } catch (error) {
    //         throw new Error(error); // TODO Something feels off about this line
    //     }
    // }

    // /**
    //  * Stop a server and remove it from our server manager
    //  * @param {Integer} id 
    //  */
    // stopAndRemoveServer = (id) => {
    //     return new Promise((resolve, reject) => {
    //         if (this._servers[id]) {
    //             this._servers[id].close(() => {
    //                 delete this._servers[id];
    //                 resolve();
    //             })
    //         } else {
    //             reject(new Error(`Cannot find server ${id}`));
    //         }
    //     })

    // }

    // stopAll = () => {
    //     return new Promise((resolve, reject) => {
    //         for (let server of this._servers) {
    //             try {
    //                 server.close(); // TODO can we do an await in a for loop?
    //             } catch (error) {
    //                 reject(error);
    //             }
    //         }
    //         resolve();
    //     })

    // }
}



module.exports = new ServerManager(); // Singleton, there should only be one ServerManager running in our app
