export interface ServerConfig {
  name: string,
  port: number,
  onConnection?: Function,
  onMessage?(message: string, id?: string): void,
  onError?: Function,
  id?: string
  endpoint?: string
}

export interface ServerRecord {
  id: string,
  name: string,
  status: string
}

export interface DataReducerState {
  streams?: any
}

export enum ProtocolType {
  WEBSOCKET,
  SERVERSIDEEVENTS,
}
