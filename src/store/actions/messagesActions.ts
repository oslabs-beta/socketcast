import * as types from './actionTypes';

export const createStream = (id: string) => ({
  type: types.CREATE_STREAM,
  payload: id,
});

export const logMessage = (id: any, message: string) => ({
  type: types.LOG_MESSAGE,
  payload: { id, message },
});
