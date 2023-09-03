import axios from 'axios';
const {
  USER_LOGIN_LOADING,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_ERROR,
  USER_SIGNUP_LOADING,
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_ERROR,
} = require('../Types/Auth.types');

let backendUrl = process.env.REACT_APP_BACKEND_URL;
// || `https://ddtodo.onrender.com`;

export const LoginAction = (cred) => async (dispatch, state) => {
  try {
    dispatch({ type: USER_LOGIN_LOADING });
    const LoginRes = await axios.post(`${backendUrl}/user/login`, cred);
    console.log(LoginRes);

    return dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: LoginRes.data,
    });
  } catch (er) {
    console.log('error:', er.message);
    return dispatch({ type: USER_LOGIN_ERROR });
  }
};

export const SignUPAction = (cred) => async (dispatch, state) => {
  try {
    dispatch({ type: USER_SIGNUP_LOADING });
    await axios.post(`${backendUrl}/user/signup`, cred);
    return dispatch({ type: USER_SIGNUP_SUCCESS });
  } catch (er) {
    console.log('error:', er.message);
    alert('User Already present Login');
    
    return dispatch({ type: USER_SIGNUP_ERROR });
  }
};
