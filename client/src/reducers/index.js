import { combineReducers } from 'redux';

import recordReducer from './recordReducer';

const rootReducer = combineReducers({
  records: recordReducer
});

export default rootReducer;
