/**
 * @description Reducer for server data
 */

import * as types from '../actions/actionTypes';

const initialState = {
  servers: {},
  currentServerId: '',
  currentEvent: null,
};

const serversReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case types.CREATE_SERVER: {
      console.log(JSON.stringify({
        ...state.servers,
        [action.payload.id]: { ...action.payload, events: [{ id: "1", eventName: "Default", eventMessage: "Hello world!" }] },
      }));
      return {
        ...state,
        servers: {
          ...state.servers,
          [action.payload.id]: {
            ...action.payload, events: [
              { id: "1", eventName: "Default", eventMessage: "Hello world!" },
              { id: "2", eventName: "Event 1", eventMessage: "Event 1" },
              { id: "3", eventName: "Event 2", eventMessage: "Event 2" }
            ]
          },
        },
      };
    }
    case types.GET_SERVER: {
      const id = action.payload;
      // invoke SM here
      console.log('Get Server');
      return { ...state };
    }
    case types.GET_SERVERS: {
      // invoke SM here
      // const serversTemp = state.serverManager.getServers()
      // console.log('SERVERS>', serversTemp)

      console.log('Get Servers');
      return { ...state };
    }
    case types.MODIFY_SERVER: {
      const { id, config } = action.payload;
      // invoke SM here
      console.log('Modify Server');
      return state;
    }
    case types.SET_CURRENT_EVENT: {
      const currentEvent = action.payload;
      console.log('Set Current Event:', currentEvent);
      return { ...state, currentEvent };
    }
    case types.SET_CURRENT_SERVER_ID: {
      const currentServerId = action.payload;
      console.log('Set Current Server Id', currentServerId);
      return { ...state, currentServerId };
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
};

export default serversReducer;
