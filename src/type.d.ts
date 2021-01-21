
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

interface DataReducerState {
  streams?: any
}

