/**
 * @description Action Creators
 */

import { ThunkAction } from 'redux-thunk';
import { Action } from 'redux';
import { v4 as uuidv4 } from 'uuid';
import ServerManager from '../../ServerManager/ServerManager';
import { RootState } from '../reducers';
import * as types from './actionTypes';
import { ServerConfig, ServerState } from '../../ServerManager/type';
import { createStream, logMessage } from './messagesActions';
import { setCurrentServerId } from './navigationActions';

export const createServer = (data: ServerState) => ({
  type: types.CREATE_SERVER,
  payload: data,
});

export const updateServerState = (serverState: ServerState) => ({
  type: types.UPDATE_SERVER_STATE,
  payload: serverState,
});

export const removeServer = (id: number) => ({
  type: types.REMOVE_SERVER,
  payload: id,
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
export const serverManagerStartServer = (config: ServerConfig, id: any): ThunkAction<void, RootState, unknown, Action<string>> => dispatch => {

  ServerManager.createServer({
    ...config,
    id: id,
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
      dispatch(createStream(data.id));
    }).catch((err: any) => {
      console.log(err);
    });
}

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
      dispatch(setCurrentServerId(data.id));
      dispatch(createStream(data.id));
    }).catch((err: any) => {
      console.log(err);
    });
};

// eslint-disable-next-line max-len
// export const serverManagerCreateSSEServer = (config: ServerConfig): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch) => {
//   ServerManager.createSSEServer({
//     ...config,
//     id: uuidv4(),
//     onServerClose: (serverState: ServerState) => {
//       dispatch(updateServerState(serverState));
//     },
//   }).then((data: any) => {
//     dispatch(createServer(data));
//     dispatch(createStream(data.id));
//   });
// };

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