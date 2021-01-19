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
interface Config {
    name: string,
    port: number,
    events?: any,
    // events: event[]
    onConnection?: any,
    onMessage?: any
}
interface Servers {
    [id: string]: {server: object}
}

