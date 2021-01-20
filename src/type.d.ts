interface ServersContainerProps {
  servers?: object;
  getServers?: any;
  createServer?: any;
  serverName?: string;
}

interface ServersContainerState {
  servers?: object;
  serverName?: string;
}

interface MainContainerProps {
    servers?: object
}

interface MainContainerState {
    servers?: object
}

interface ServerConfig {
    name: string,
    port: number,
    onConnection?: Function,
    onMessage?: Function
    onError?: Function
}

interface ServerRecord {
  id: string,
  name: string,
  status: string
}