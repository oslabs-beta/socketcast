
interface ServerConfig {
  name: string,
  port: number,
  onConnection?: Function,
  onMessage?(message: string)
  onError?: Function
}

interface ServerRecord {
  id: string,
  name: string,
  status: string
}

interface DataReducerState {
  streams?: any
}

