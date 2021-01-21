/**
 * @description Combines reducers
 */

import { combineReducers } from 'redux';
import serversReducer from './serversReducer';
import dataReducer from './dataReducer'

const reducers = combineReducers({
  serversReducer,
  dataReducer,
});

export default reducers;
export type RootState = ReturnType<typeof reducers>;
