import React from 'react';
import { useDispatch } from 'react-redux';
import { authConstants } from 'redux/constants';

const Login = () => {
  const dispatch = useDispatch();
  const logInUser = () => {
    dispatch({
      type: authConstants.LOGIN_SUCCESS,
      payload: true,
    });
  };

  return (
    <section className="section">
      <div className="container">
        <h3 className="heading">Login Page</h3>
        <button onClick={logInUser} className="btn btn-outline-dark btn-sm">
          Login
        </button>
      </div>
    </section>
  );
};

export default Login;
