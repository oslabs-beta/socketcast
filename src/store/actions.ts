/**
 * @description Action Creators
 */

import { ThunkAction } from 'redux-thunk';
import { Action } from 'redux';
import { v4 as uuidv4 } from 'uuid';
import ServerManager from '../ServerManager/ServerManager';
import { RootState } from './reducers';
import * as types from './actions/actionTypes';
import { ServerConfig, ServerState } from '../ServerManager/type';

export const createServer = (data: ServerState) => ({
  type: types.CREATE_SERVER,
  payload: data,
});

export const getServer = (id: Number) => ({
  type: types.GET_SERVER,
  payload: id,
});

export const getServers = () => ({
  type: types.GET_SERVERS,
  payload: null,
});

export const modifyServer = (id: Number, config: Object) => ({
  type: types.MODIFY_SERVER,
  payload: { id, config },
});

export const setCurrentEventId = (event: object) => ({
  type: types.SET_CURRENT_EVENT,
  payload: event,
});

export const setCurrentServerId = (id: string) => ({
  type: types.SET_CURRENT_SERVER_ID,
  payload: id,
});

export const stopAll = () => ({
  type: types.STOP_ALL,
  payload: null,
});


export const updateServerState = (serverState: ServerState) => ({
  type: types.UPDATE_SERVER_STATE,
  payload: serverState,
});

export const stopAndRemoveServer = (id: number) => ({
  type: types.STOP_AND_REMOVE_SERVER,
  payload: id,
});

// eslint-disable-next-line max-len
export const serverManagerStopServer = (id: number): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch) => {
  ServerManager.stopServer(id);
};

// eslint-disable-next-line max-len
export const serverManagerCreateServer = (config: ServerConfig): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch) => {
  ServerManager.createServer({
    ...config,
    id: uuidv4(),
    onMessage: (message, id) => {
      console.log(`from client to ${id} server: ${message}`);
      dispatch(logMessage(id, message));
    },
    onServerClose: (serverState: ServerState) => {
      dispatch(updateServerState(serverState));
    },
  })
    .then((data: any) => {
      dispatch(createServer(data));
      // dispatch action to create data stream for this server
      dispatch(createStream(data.id));
    }).catch((err: any) => {
      console.log(err);
    });
};

// eslint-disable-next-line max-len
export const serverManagerCreateSSEServer = (config: ServerConfig): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch) => {
  ServerManager.createSSEServer({
    ...config,
    id: uuidv4(),
    onServerClose: (serverState: ServerState) => {
      dispatch(updateServerState(serverState));
    },
  }).then((data: any) => {
    dispatch(createServer(data));
    dispatch(createStream(data.id));
  });
};

// eslint-disable-next-line max-len
export const serverManagerBroadcastAll = (id: string, message: string): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch) => {
  /**
     * The following method, broadcastToAll() is not "promisified" yet.
     * However, it is an asynchronous action and Redux will "complain" if we do not
     * write this in thunk format.
     */
  ServerManager.broadcastToAll(id, message);
  /**
     * After calling the above broadcastToAll() method, dispatch some action
     * that adds to our store's state that keeps track of messages.
     */

  // once broadcasttoall gets promisified and we can guarantee message emission
  // call this dispatch to add the message to correct data storage (based on server_id)
  dispatch(logMessage(id, message));
};

export const createStream = (id: string) => ({
  type: types.CREATE_STREAM,
  payload: id,
});

export const logMessage = (id: any, message: string) => ({
  type: types.LOG_MESSAGE,
  payload: { id, message },
});
