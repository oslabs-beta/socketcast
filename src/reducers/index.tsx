/**
 * @description Combines reducers
 */

import { combineReducers } from 'redux';
import serversReducer from './serversReducer';


const reducers = combineReducers({
  serversReducer: serversReducer,
});

export default reducers;