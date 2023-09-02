import axios from 'axios';
const {
  USER_LOGIN_LOADING,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_ERROR,
  USER_SIGNUP_LOADING,
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_ERROR,
} = require('../Types/Auth.types');

const backendUrl = process.env.REACT_APP_BACKEND_URL;

export const LoginAction = (cred) => async (dispatch, state) => {
  try {
    dispatch({ type: USER_LOGIN_LOADING });
    const login = axios.post(`${backendUrl}/user/login`, cred);
    return dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: (await login).data.token,
    });
  } catch (er) {
    console.log('error:', er.message);
    return dispatch({ type: USER_LOGIN_ERROR });
  }
};

export const SignUPAction = (cred) => async (dispatch, state) => {
  try {
    dispatch({ type: USER_SIGNUP_LOADING });
    axios.post(`${backendUrl}/user/signup`, cred);
    return dispatch({ type: USER_SIGNUP_SUCCESS });
  } catch (er) {
    console.log('error:', er.message);
    return dispatch({ type: USER_SIGNUP_ERROR });
  }
};
