import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducers from './reducers';

const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel2,
  whitelist: ['auth'],
  blacklist: [],
};

const enhancer = compose(applyMiddleware(thunk));

const persistedReducer = persistReducer(persistConfig, reducers);
export const store = createStore(
  persistedReducer,
  composeWithDevTools(enhancer),
);
export const persistor = persistStore(store);
