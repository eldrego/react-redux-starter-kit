import { authConstants } from '../constants';
import initialState from './initialState';

const authReducer = (state = initialState.auth, action) => {
  switch (action.type) {
    case authConstants.LOGIN_FAILURE:
      return {
        ...state,
        loggedIn: false,
      };
    case authConstants.LOGIN_SUCCESS:
      return {
        ...state,
        loggedIn: true,
      };
    case authConstants.LOGOUT_SUCCESS:
      return {
        ...state,
        loggedIn: false,
      };
    default:
      return state;
  }
};

export default authReducer;
