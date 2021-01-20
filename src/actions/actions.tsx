/**
 * @description Action Creators
 */

import ServerManager from '../ServerManager/ServerManager';
import { ThunkAction } from 'redux-thunk';
import { Action } from 'redux';
import { RootState } from '../reducers';
import * as types from '../constants/actionTypes';

export const createServer = (data: any) => ({
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

export const setCurrentServerId = (id: string) => ({
  type: types.SET_CURRENT_SERVER_ID,
  payload: id
})

export const stopAll = () => ({
  type: types.STOP_ALL,
  payload: null,
});

export const stopAndRemoveServer = (id: Number) => ({
  type: types.STOP_AND_REMOVE_SERVER,
  payload: id,
})

export const serverManagerCreateServer = (config: ServerConfig): ThunkAction<void, RootState, unknown, Action<string>> => {
  return dispatch => {
    ServerManager.createServer(config)
      .then((data: any) => {
        dispatch(createServer(data))
      }).catch((err: any) => {
        console.log(err)
      });
  }
}

export const serverManagerBroadcastAll = (id: string, message: string): ThunkAction<void, RootState, unknown, Action<string>> => {
  return dispatch => {
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
  }
}