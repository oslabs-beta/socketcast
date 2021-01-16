class ServerAbstract {
    constructor(server, { broadcast }) {
        this.Server = server;
        this.broadcast = broadcast;
    }

    broadcastToAll = (message) => {
        return this.broadcast(message);
    }
    
    // TODO
    getPort = () => {

    }

    isListening = () => {
        return this.Server.listening;
    }
}

module.exports = ServerAbstract;