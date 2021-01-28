/**
 * @description Reducer for server data
 */

import * as types from '../actions/actionTypes';

const initialState = {
  servers: {},
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
    case types.SET_CURRENT_EVENT: {
      const currentEvent = action.payload;
      return { ...state, currentEvent };
    }
    default: {
      return state;
    }
  }
};

export default serversReducer;
