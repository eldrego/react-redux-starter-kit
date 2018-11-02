import { ADD_RECORD, FETCH_RECORD } from '../constants/actionTypes';

const initialState = {
  items: [],
  item: {}
};

const recordReducer = (state = initialState, action) => {
  switch (action.type) {
  case ADD_RECORD:
    return {
      ...state,
      items: [...state.items, action.payload]
    };
  case FETCH_RECORD:
    return {
      ...state,
      items: action.payload
    };
  default:
    return state;
  }
};

export default recordReducer;
