import { recordConstants } from '../constants';

const initialState = {
  records: [],
};

const recordReducer = (state = initialState, action) => {
  switch (action.type) {
  case recordConstants.FETCH_RECORD:
    return {
      ...state,
      records: action.payload
    };
  default:
    return state;
  }
};

export default recordReducer;
