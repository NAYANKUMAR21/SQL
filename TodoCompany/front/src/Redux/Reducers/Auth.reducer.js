import {
  USER_LOGIN_ERROR,
  USER_LOGIN_LOADING,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_SIGNUP_ERROR,
  USER_SIGNUP_LOADING,
  USER_SIGNUP_SUCCESS,
} from '../Types/Auth.types';
import { UserInit } from '../initializers/user.init';
const AuthReducer = (state = UserInit, { type, payload }) => {
  switch (type) {
    case USER_LOGIN_LOADING: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case USER_LOGIN_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case USER_LOGIN_SUCCESS: {
      console.log(payload);
      localStorage.setItem('token', payload.token);
      localStorage.setItem('name', payload.name);
      localStorage.setItem('avatar', payload.avatar);
      return {
        ...state,
        loading: false,
        error: false,
        signupError: false,
        name: localStorage.getItem('name'),
        avatar: localStorage.getItem('avatar'),
        data: {
          token: localStorage.getItem('token'),
          isAuth: localStorage.getItem('token') ? true : false,
        },
      };
    }
    case USER_SIGNUP_ERROR: {
      return {
        ...state,
        loading: false,
        signupError: true,
      };
    }
    case USER_SIGNUP_LOADING: {
      return {
        ...state,
        loading: true,
        error: false,
        signupError: false,
      };
    }
    case USER_SIGNUP_SUCCESS: {
      localStorage.setItem('isSignup', true);
      return {
        ...state,
        loading: false,
        error: false,
        signupError: false,
        avatar: localStorage.getItem('avatar'),
        name: localStorage.getItem('name'),
        data: {
          token: localStorage.getItem('token'),
          isAuth: localStorage.getItem('token') ? true : false,
        },
        isSigned: localStorage.getItem('isSignup') ? true : false,
      };
    }
    case USER_LOGOUT: {
      localStorage.removeItem('token');
      localStorage.removeItem('isSignup');
      localStorage.removeItem('name');
      localStorage.removeItem('avatar');
      return {
        loading: false,
        error: false,
        signupError: false,
        data: {
          token: localStorage.getItem('token'),
          isAuth: localStorage.getItem('token') ? true : false,
        },
        isSigned: localStorage.getItem('isSignup') ? true : false,
      };
    }
    default: {
      return state;
    }
  }
};

export default AuthReducer;
