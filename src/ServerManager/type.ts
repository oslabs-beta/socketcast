export interface ServerConfig {
  name: string,
  port: number,
  onConnection?: Function,
  onMessage?(message: string, id?: string): void,
  onServerClose?(record: ServerState): void,
  onError?: Function,
  id?: string
  endpoint?: string
}

export interface ServerState {
  id: string,
  name: string,
  port: number,
  status: string
}

export interface MessagesReducerState {
  streams?: any
}

export enum ProtocolType {
  WEBSOCKET,
  SERVERSIDEEVENTS,
}
