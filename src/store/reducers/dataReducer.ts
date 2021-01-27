/**
 * @description Reducer for server data
 * @TODO Currently every server stream has on array of messages like this
 ***     streams: {[server_id]: stream[]}
 *** in the future we may want to restructure state for event layer
 ***     streams: {[server_id]: {[event_id]: stream[]}}
 */

import { DataReducerState } from "@/ServerManager/type";
import * as types from "../actions/actionTypes";

const initialState: DataReducerState = {
  streams: {},
};

const dataReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case types.CREATE_STREAM: {
        console.log("CREATE STREAM PAYLOAD>>>", action.payload)
      //Add array to hold stream data for server (by server id)
      return {
        ...state,
        streams: { ...state.streams, [action.payload]: [] },
      };
    }
    case types.LOG_MESSAGE: {
        const {id, message} = action.payload
     
        
        //grab the stream array of messages to corresponding server_id
        const stream = state.streams[id]
        
        //push message into correct stream
        stream.push(message)
        console.log('MESSAGE:', message, ' CURRENT STATE: ', state)

      return {...state, streams: {...state.streams, [id]: stream}}
    }
    default: {
      return state;
    }
  }
};

export default dataReducer
