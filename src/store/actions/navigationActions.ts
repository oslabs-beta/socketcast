import * as types from './actionTypes';

export const setCurrentEventId = (event: object) => ({
  type: types.SET_CURRENT_EVENT,
  payload: event,
});

export const setCurrentServerId = (id: string) => ({
  type: types.SET_CURRENT_SERVER_ID,
  payload: id,
});
