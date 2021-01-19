/**
 * @description Reducer for server data
 */

import * as types from "../constants/actionTypes";
const ServerManager = require('@/ServerManager/ServerManager')
// import ServerManager from "../ServerManager/ServerManager";
// TODO: Import Server Manager (SM) here and update cases

const initialState = {
  // serverManager: new ServerManager(),
  servers: {},
  serverName: "",
  serverEndpoint: "",
  serverPort: "",
};


const serversReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case types.CREATE_SERVER: {
      console.log(JSON.stringify({
        ...state.servers,
        [action.payload.id]: { ...action.payload }
      }))
      return {
        ...state,
        servers: {
          ...state.servers,
          [action.payload.id]: { ...action.payload }
        }
      }
    }
    case types.GET_SERVER: {
      const id = action.payload;
      // invoke SM here
      console.log("Get Server");
      return { ...state }
    }
    case types.GET_SERVERS: {
      // invoke SM here
      // const serversTemp = state.serverManager.getServers()
      // console.log('SERVERS>', serversTemp)

      console.log("Get Servers");
      return { ...state }
    }
    case types.MODIFY_SERVER: {
      const { id, config } = action.payload;
      // invoke SM here
      console.log("Modify Server");
      return state;
    }
    case types.STOP_ALL: {
      // invoke SM here
      console.log("Stop All");
      return state;
    }
    case types.STOP_AND_REMOVE_SERVER: {
      const id = action.payload;
      // invoke SM here
      console.log("Stop & Remove Server");
      return state;
    }
    default: {
      return state;
    }
  }
};

export default serversReducer;
