/**
 * @description App's single source of truth
 */

import { applyMiddleware, createStore, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducers from './reducers/index';

/**
 * There is a potential issue with Electron version 9+ when trying to use Redux Dev Tools
 * https://github.com/electron/electron/issues/24011
 * https://github.com/electron/electron/issues/24638
 */
const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk)),
);

export default store;
