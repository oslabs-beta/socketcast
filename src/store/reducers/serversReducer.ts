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
    case types.GET_SERVER: {
      const id = action.payload;
      return { ...state };
    }
    case types.GET_SERVERS: {
      return { ...state };
    }
    case types.MODIFY_SERVER: {
      const { id, config } = action.payload;
      return state;
    }
    case types.SET_CURRENT_EVENT: {
      const currentEvent = action.payload;
      return { ...state, currentEvent };
    }
    case types.SET_CURRENT_SERVER_ID: {
      const currentServerId = action.payload;
      return { ...state, currentServerId };
    }
    case types.STOP_ALL: {
      return state;
    }
    case types.STOP_AND_REMOVE_SERVER: {
      const id = action.payload;
      return state;
    }
    default: {
      return state;
    }
  }
};

export default serversReducer;
