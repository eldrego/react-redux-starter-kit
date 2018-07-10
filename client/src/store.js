import { createStore, combineReducers, applyMiddleware } from 'redux';

import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

import reducers from './reducers';


const reducer = combineReducers({
  reducers
});

/* eslint-disable no-underscore-dangle */
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(
    createLogger(),
    thunkMiddleware
  )
);
/* eslint-enable */

export default store;
