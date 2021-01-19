class ServerAbstract {
   
    server: any
    broadcast: any
    name: string

    constructor(server: any, { broadcast }: {broadcast: any}, name: string) {
        
        this.server = server;
        this.broadcast = broadcast;
        this.name = name
    }

    broadcastToAll = (message: any) => {
        console.log(`in ServerAbstract`)
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