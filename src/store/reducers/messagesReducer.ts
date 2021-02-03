/**
 * @description Reducer for server data
 * @TODO Currently every server stream has on array of messages like this
 ***     streams: {[server_id]: stream[]}
 *** in the future we may want to restructure state for event layer
 ***     streams: {[server_id]: {[event_id]: stream[]}}
 */

import { MessagesReducerState } from '@/ServerManager/type';
import * as types from '../actions/actionTypes';

const initialState: MessagesReducerState = {
  streams: {},
};

const messagesReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case types.CREATE_STREAM: {
      return {
        ...state,
        streams: {
          ...state.streams,
          [action.payload]: [],
        },
      };
    }
    case types.LOG_MESSAGE: {
      const { id, message } = action.payload;
      const stream = state.streams[id];
      stream.push(message);
      
      return {
        ...state,
        streams: {
          ...state.streams,
          [id]: stream,
        },
      };
    }
    default: {
      return state;
    }
  }
};

export default messagesReducer;
