import { ADD_RECORD } from '../constants/actionTypes';

const initialState = {
  records: []
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
  case ADD_RECORD:
    return { ...state, articles: [...state.record, action.payload] };
  default:
    return state;
  }
};

export default reducers;
