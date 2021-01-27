/* eslint-disable @typescript-eslint/semi */
class ServerAbstract {
  public server: any;

  private broadcast: any

  public name: string

  public id: string

  public port: number

  constructor(server: any,
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
