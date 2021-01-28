/**
 * @description Combines reducers
 */

import { combineReducers } from 'redux';
import serversReducer from './serversReducer';
import messagesReducer from './messagesReducer';
import navigationReducer from './navigationReducer';

const reducers = combineReducers({
  servers: serversReducer,
  messages: messagesReducer,
  navigation: navigationReducer,
});

export default reducers;
export type RootState = ReturnType<typeof reducers>;
