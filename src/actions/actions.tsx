/**
 * @description Action Creators
 */

import * as types from '../constants/actionTypes';

export const createServer = (config: Object) => ({
  type: types.CREATE_SERVER,
  payload: config,
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

export const stopAll = () => ({
  type: types.STOP_ALL,
  payload: null,
});

export const stopAndRemoveServer = (id: Number) => ({
  type: types.STOP_AND_REMOVE_SERVER,
  payload: id,
})