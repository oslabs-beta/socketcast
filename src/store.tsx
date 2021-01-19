/**
 * @description App's single source of truth
 */

import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers/index';
import thunk from 'redux-thunk'

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;