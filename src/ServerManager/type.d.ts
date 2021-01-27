interface ServerConfig {
  name: string,
  port: number,
  onConnection?: Function,
  onMessage?(message: string, id?: string),
  onError?: Function,
  id?: string
}

interface ServerRecord {
  id: string,
  name: string,
  status: string
}

interface DataReducerState {
  streams?: any
}
