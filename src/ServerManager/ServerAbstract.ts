import WebSocket from "ws";

class ServerAbstract {
    server: any
    broadcast: any
    name: string

    constructor(server: WebSocket.Server, { broadcast }: { broadcast: any }, name: string) {
        this.server = server;
        this.broadcast = broadcast;
        this.name = name
    }

    broadcastToAll = (message: any) => {
        return this.broadcast(message);
    }

    isListening = () => {
        return this.server.listening;
    }
}

export default ServerAbstract;