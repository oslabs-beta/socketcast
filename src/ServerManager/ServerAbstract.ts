class ServerAbstract {
    server: any
    broadcast: any


    constructor(server: any, { broadcast }: {broadcast: any}) {
        this.server = server;
        this.broadcast = broadcast;
    }

    broadcastToAll = (message: any) => {
        return this.broadcast(message);
    }
    
    // TODO
    getPort = () => {

    }

    isListening = () => {
        return this.server.listening;
    }
}

export default ServerAbstract;