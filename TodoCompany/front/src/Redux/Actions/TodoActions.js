import axios from 'axios';
import {
  GET_TODO_ERROR,
  GET_TODO_LOADING,
  GET_TODO_SUCCESS,
} from '../Types/Todo.types';

let backendUrl = process.env.REACT_APP_BACKEND_URL;
export const getSingleUserTodo = () => async (dispatch, state) => {
  try {
    dispatch({ type: GET_TODO_LOADING });
    const getSingleUser = await axios.get(`${backendUrl}/todo/`);
    return dispatch({ type: GET_TODO_SUCCESS, payload: getSingleUser.data });
  } catch (er) {
    console.log(er.message);
    return dispatch({ type: GET_TODO_ERROR });
  }
};

export const addTodo = () => async (dispatch, state) => {};
export const patchTodo = () => async (dispatch, state) => {};
export const deleteTodo = () => async (dispatch, state) => {};
