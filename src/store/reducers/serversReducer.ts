/**
 * @description Reducer for server data
 */

import * as types from '../actions/actionTypes';

const initialState = {
  servers: (window.localStorage.store ? JSON.parse(window.localStorage.store).servers : {}),
};

const serversReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case types.CREATE_SERVER: {

      //--Persistent Data Storage--
      //let data = { ...state, servers: { ...state.servers, [action.payload.id]: { ...action.payload } } };
      let data = JSON.parse(JSON.stringify({ ...state, servers: { ...state.servers, [action.payload.id]: { ...action.payload }}}))
      Object.values(data.servers).map((server: any) => server.status = "STOPPED")
      window.localStorage.setItem("store", JSON.stringify(data))
      return {
        ...state,
        servers: {
          ...state.servers,
          [action.payload.id]: {
            ...action.payload,
          },
        },
      };
    }
    case types.REMOVE_SERVER: {
      let newState = { ...state }
      delete newState.servers[action.payload];

      //--Persistent Data Storage--
      const storage = JSON.parse(JSON.stringify({ ...newState }));
      Object.values(storage.servers).map((server: any) => server.status = "STOPPED");
      window.localStorage.setItem("store", JSON.stringify(storage));

      return newState;
    }
    case types.SET_CURRENT_EVENT: {
      const currentEvent = action.payload;
      return { ...state, currentEvent };
    }
    case types.UPDATE_SERVER_STATE: {
      return {
        ...state,
        servers: {
          ...state.servers,
          [action.payload.id]: {
            ...action.payload,
          },
        },
      };
    }

    default: {
      return state;
    }
  }
};

export default serversReducer;
