import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers';

const enhancer = compose(
  applyMiddleware(createLogger(), thunk)
);

/* eslint-disable no-underscore-dangle */
export const store = createStore(
  reducers,
  composeWithDevTools(enhancer)
);
/* eslint-enable */

export default store;
