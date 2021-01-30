/* eslint-disable @typescript-eslint/semi */
class ServerAbstract {
  public server: any;

  private broadcast: any

  private stopServer: any

  public name: string

  public id: string

  public port: number

  public protocol: any

  constructor(server: any,
    { broadcast, stopServer }: { broadcast: any, stopServer?: any },
    name: string, id: string, port: number, protocol?: string) {
    this.id = id;
    this.server = server;
    this.broadcast = broadcast;
    this.name = name
    this.port = port
    this.stopServer = stopServer;
    this.protocol = protocol
  }

  broadcastToAll = (message: any) => this.broadcast(message);

  isListening = () => this.server.listening;

  stop = () => {
    this.stopServer();
  };
}

export default ServerAbstract;
