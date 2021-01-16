/**
 * @description Reducer for server data
 */

import * as types from '../constants/actionTypes';
const serverManager = require('../ServerManager/ServerManager.ts')
// import ServerManager from '../ServerManager/ServerManager.js'
// TODO: Import Server Manager (SM) here and update cases

const initialState = {
  serverManager: {},
  servers: {},
  serverName: '',
  serverEndpoint: '',
  serverPort: ''
}

const serversReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case types.CREATE_SERVER: {
      const config = action.payload;
      // invoke SM here
      console.log('Create Server');
      return state;
    }
    case types.GET_SERVER: {
      const id = action.payload;
      // invoke SM here
      console.log('Get Server');
      return state;
    }
    case types.GET_SERVERS: {
      // invoke SM here
      console.log('Get Servers');
      return state;
    }
    case types.MODIFY_SERVER: {
      const { id, config } = action.payload;
      // invoke SM here
      console.log('Modify Server');
      return state;
    }
    case types.STOP_ALL: {
      // invoke SM here
      console.log('Stop All');
      return state;
    }
    case types.STOP_AND_REMOVE_SERVER: {
      const id = action.payload;
      // invoke SM here
      console.log('Stop & Remove Server');
      return state;
    }
    default: {
      return state;
    }
  }
}

export default serversReducer;