import http from 'http';
import express, { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';
import cors from 'cors';
import * as WebSocket from 'ws';

import { ServerConfig, ServerState } from './type';
import ServerAbstract from './ServerAbstract';

enum ServerStatus {
  RUNNING = 'RUNNING',
  STOPPED = 'STOPPED',
}

class ServerManager {
  private servers: { [index: string]: ServerAbstract };

  constructor() {
    this.servers = {};
  }

  /**
       * Returns an object containing our servers. The keys are the
       * ID of the server within ServerManager.
       * @returns {Array.<ServerState>}
       */
  getServers = () => Object.keys(this.servers).map((currentKey: string) => ({
    id: this.servers[currentKey].id,
    name: this.servers[currentKey].name,
    status: this.servers[currentKey].isListening() ? ServerStatus.RUNNING : ServerStatus.STOPPED,
  }));

  /**
       * Get an individual ServerAbstract by the id of the server.
       * This returns an object that contains a reference the WebSocket server itself.
       * @param {string} id
       * @
       */
  getServerAbstract = (id: string) => this.servers[id];

  /**
       * Get an individual server's ServerRecord
       * @param {string} id
       */
  getServer = (id: string) => {
    const { name } = this.servers[id];
    return {
      id,
      name,
      status: this.servers[id].isListening() ? ServerStatus.RUNNING : ServerStatus.STOPPED,
    };
  };

  /**
       * Create a new WebSocket server based on configuration.
       * @param {ServerConfig} config - Configuration object for socket.io server
       * @param {string} config.name - Configuration object for socket.io server
       * @param {Integer} config.port - Port to run the socket.io server on
       * @param {Function} config.onConnection - Callback for when a client successfully
       * connects to the server
       * @param {Function} config.onMessage - Callback for when a message is sent to our
       * server by a client
       * @param {Function} config.onError - Callback for when an error happens on the
       * server. The error will be the only parameter of the callback.
       * @returns {Promise}
       */
  createServer = (config: ServerConfig): Promise<ServerState | Error> => {
    const {
      name, port, onConnection, onMessage, id, onServerClose, protocol, endpoint
    } = config;
    const app = express();
    const server = new http.Server(app);
    const serverId = id || uuidv4();
    app.use(cors());


    if (protocol === "websocket") {  
      const wss = new WebSocket.Server({ server });

      wss.on('connection', (ws: any, req: object) => {
       if (onConnection) onConnection();
        ws.on('message', (msg: string) => {
         if (onMessage) onMessage(msg, serverId);
        });
      });

        /**
         * TODO Promisify this somehow. The complication is promisifying it is that we
         * need to wait messages to be sent to ALL clients. If we don't do this, we assume
         * that the message is always successfully emitted at the time it displays on the UI
         * (which may not be true)
         */

      const broadcast = (message: string) => {
        wss.clients.forEach((client: any) => {
          client.send(message);
        });
      };

      const stopServer = () => {
        wss.clients.forEach((ws) => {
          ws.terminate();
        });
        server.close().once('close', () => {
          if (onServerClose) {
            onServerClose({
              id: serverId,
              name,
              port,
              protocol: protocol,
              status: ServerStatus.STOPPED,
            });
          }
        });
      };
    
      // eslint-disable-next-line max-len
      this.servers[serverId] = new ServerAbstract(wss, { broadcast, stopServer }, name, serverId, port, protocol);

    } else {
      let clients: any[] = [];
      const sseEndpointHandler = (req: Request, res: Response) => {
        res.writeHead(200, {
          'Content-Type': 'text/event-stream',
          Connection: 'keep-alive',
          'Cache-Control': 'no-cache',
        });

        const clientId = uuidv4();
        clients.push({ id: clientId, res });
    
        req.on('close', () => {
            clients = clients.filter((client) => client.id !== clientId);
          });
        };
    
        const broadcast = (message: string) => {
          clients.forEach((client) => client.res.write(message));
        };
    
        // To stop a server, all connections to clients must be closed. Then, you can close the actual server.
        const stopServer = () => {
          clients.forEach((client) => client.res.end());
          server.close().once('close', () => {
            if (onServerClose) {
              onServerClose({
                id: serverId,
                name,
                port,
                status: ServerStatus.STOPPED,
                protocol: protocol
              });
            }
          });
        };
      app.use((endpoint || '/'), sseEndpointHandler);
      // eslint-disable-next-line max-len
      this.servers[serverId] = new ServerAbstract(server, { broadcast, stopServer }, name, serverId, port);
    }
    



    /**
             * We return a promise, but we _cannot_ ever reject this promise because any errors
             * that would happen when calling server.listen() will be a Node Event. We choose
             * to use a promise, however, because we want to tell our consumers when our server
             * is able to listen to an event.
             * https://github.com/expressjs/express/issues/2856
             */
    return new Promise((resolve: Function, reject) => {
      server.listen(port || 3000, () => resolve({
        id,
        name,
        port,
        protocol,
        status: ServerStatus.RUNNING,
      }));
    });
  };

  // createSSEServer = (config: ServerConfig): Promise<ServerState | Error> => {
  //   const {
  //     name, port, onConnection, onError, id, endpoint, onServerClose,
  //   } = config;
  //   const app = express();
  //   const server = new http.Server(app);
  //   const serverId = id || uuidv4();
  //   let clients: any[] = [];

  //   app.use(cors());

  //   const sseEndpointHandler = (req: Request, res: Response) => {
  //     res.writeHead(200, {
  //       'Content-Type': 'text/event-stream',
  //       Connection: 'keep-alive',
  //       'Cache-Control': 'no-cache',
  //     });

  //     const clientId = uuidv4();
  //     clients.push({
  //       id: clientId,
  //       res,
  //     });

  //     req.on('close', () => {
  //       clients = clients.filter((client) => client.id !== clientId);
  //     });
  //   };

  //   const broadcast = (message: string) => {
  //     clients.forEach((client) => client.res.write(message));
  //   };

  //   // To stop a server, all connections to clients must be closed. Then, you can close the actual server.
  //   const stopServer = () => {
  //     clients.forEach((client) => client.res.end());
  //     server.close().once('close', () => {
  //       if (onServerClose) {
  //         onServerClose({
  //           id: serverId,
  //           name,
  //           port,
  //           status: ServerStatus.STOPPED,
  //         });
  //       }
  //     });
  //   };

  //   app.use((endpoint || '/'), sseEndpointHandler);

  //   // eslint-disable-next-line max-len
  //   this.servers[serverId] = new ServerAbstract(server, { broadcast, stopServer }, name, serverId, port);

  //   return new Promise((resolve: Function, reject) => {
  //     server.listen(port || 3000, () => resolve({
  //       id: serverId,
  //       name,
  //       port,
  //       status: ServerStatus.RUNNING,
  //     }));
  //   });
  // };

  // TODO Promisify this.
  /**
       * Broadcast a message to all the clients that are connected to the socket
       * @param {string} id - The id of the server who's clients you want to send messages to
       * @param {string} message - stringified message
       * @returns {Promise}
       */
  broadcastToAll = (id: string, message: string) => {
    this.servers[id].broadcastToAll(message);
  };

  // TODO Complete this.
  /**
       * Disconnect all the connections to the socket and close the server from listening to
       * new connections.
       * @param id
       * @returns {Promise}
       */
  stopServer = (id: number) => {
    // Close all connections to the sockets
    // call server.stop()
    this.servers[id].stop();
  };
}

// Singleton, there should only be one ServerManager running in our app
export default new ServerManager();
