/**
 * @description Combines reducers
 */

import { combineReducers } from 'redux';
import serversReducer from './serversReducer';


const reducers = combineReducers({
  servers: serversReducer,
});

export default reducers;