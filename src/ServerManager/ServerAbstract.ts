/* eslint-disable @typescript-eslint/semi */
import WebSocket from 'ws';

class ServerAbstract {
  server: any

  broadcast: any

  name: string

  id: string

  port: number

  constructor(server: WebSocket.Server,
    { broadcast }: { broadcast: any },
    name: string, id: string, port: number) {
    this.id = id;
    this.server = server;
    this.broadcast = broadcast;
    this.name = name
    this.port = port
  }

  broadcastToAll = (message: any) => this.broadcast(message);

  isListening = () => this.server.listening;
}

export default ServerAbstract;
