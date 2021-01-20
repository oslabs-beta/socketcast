import http, { Server } from 'http';
import express from 'express';
import { v4 as uuidv4 } from 'uuid';
import cors from 'cors';
import * as WebSocket from 'ws';

import ServerAbstract from './ServerAbstract';

enum ServerStatus {
    RUNNING = 'RUNNING',
    STOPPED = 'STOPPED'
}

class ServerManager {
    //define interfaces (from type.d.ts)
    private _servers: { [index: string]: ServerAbstract }

    constructor() {
        // Denoted with _ because this should not be modified directly. 
        this._servers = {};
    }

    /**
     * Returns an object containing our servers. The keys are the the ID of the server within ServerManager.
     */
    getServers = () => {
        return this._servers;
    }

    /**
     * Get an individual ServerAbstract by the id of the server. This returns an object that contains a reference the WebSocket server itself.
     * @param {string} id
     */
    getServerAbstract = (id: string) => {
        return this._servers[id];
    }

    /**
     * Get an individual server's ServerRecord
     * @param {string} id
     */
    getServer = (id: string) => {
        const { name } = this._servers[id];
        return {
            id,
            name,
            status: this._servers[id].isListening() ? ServerStatus.RUNNING : ServerStatus.STOPPED
        };
    }

    /**
     * Create a new WebSocket server based on configuration.
     * @param {ServerConfig} config - Configuration object for socket.io server
     * @param {String} config.name - Configuration object for socket.io server
     * @param {Integer} config.port - Port to run the socket.io server on
     * @param {Function} config.onConnection - Callback for when a client connects to the server
     * @param {Function} config.onMessage
     * @param {Function} config.onError
     * @returns {Promise} -
     */
    createServer = (config: ServerConfig): Promise<ServerRecord | Error> => {
        const { name, port, onConnection, onMessage, onError } = config;
        const app = express();
        const server = new http.Server(app);
        const id = uuidv4();
        app.use(cors());

        const wss = new WebSocket.Server({ server });

        wss.on('connection', (ws: any, req: object) => {
            if (onConnection) onConnection();
            ws.on('message', (msg: string) => {
                if (onMessage) onMessage(msg);
            })

        });

        // TODO Promisify this somehow. The complication is promisifying it is that we need to wait messages to be sent to ALL clients
        // If we don't do this, we assume that the message is always successfully emitted at the time it displays on the UI (which may not be true)
        const broadcast = (message: string) => {
            console.log(`in servermanager broadcast`, wss.clients)
            wss.clients.forEach((client: any) => {
                console.log('attempting to send to client')
                client.send(message);
            });

        }

        this._servers[id] = new ServerAbstract(wss, { broadcast }, name);

        /**
         * We return a promise, but we _cannot_ ever reject this promise because any errors that would happen when calling
         * server.listen() will be a Node Event. We choose to use a promise, however, because we want to tell our consumers
         * when our server is able to listen to an event.
         * https://github.com/expressjs/express/issues/2856
         */
        return new Promise((resolve: Function, reject) => {
            server.listen(port || 3000, () => {
                console.log(`Server ${id} created on ${port}`);
                return resolve({
                    id,
                    name,
                    status: ServerStatus.RUNNING
                });
            });
        });
    }

    // TODO Promisify this.
    /**
     * Broadcast a message to all the clients that are connected to the socket
     * @param {string} id - The id of the server who's clients you want to send messages to
     * @param {string} message - stringified message
     * @returns {Promise}
     */
    broadcastToAll = (id: string, message: string) => {
        // @ts-ignore
        this._servers[id].broadcastToAll(message);
    }

    // TODO Complete this.
    /**
     * Disconnect all the connections to the socket and close the server from listening to new connections.
     * @param id 
     * @returns {Promise}
     */
    stopServer = (id: string) => {
        // Close all connections to the sockets
        // call server.stop()
        // @ts-ignore
        this._servers[id].server.stop()
    }

}



module.exports = new ServerManager(); // Singleton, there should only be one ServerManager running in our app
