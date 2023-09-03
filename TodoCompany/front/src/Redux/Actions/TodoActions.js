import axios from 'axios';
import {
  GET_TODO_ERROR,
  GET_TODO_LOADING,
  GET_TODO_SUCCESS,
} from '../Types/Todo.types';

let backendUrl =
  process.env.REACT_APP_BACKEND_URL || `https://ddtodo.onrender.com`;
console.log(backendUrl);
export const getSingleUserTodo = () => async (dispatch, state) => {
  try {
    let token = localStorage.getItem('token');
    dispatch({ type: GET_TODO_LOADING });
    const getSingleUser = await axios.get(`${backendUrl}/todo`, {
      headers: { Authorization: token },
    });
    console.log(getSingleUser);
    return dispatch({ type: GET_TODO_SUCCESS, payload: getSingleUser.data });
  } catch (er) {
    console.log(er.message);
    return dispatch({ type: GET_TODO_ERROR });
  }
};

export const addTodo = (title) => async (dispatch, state) => {
  try {
    let token = localStorage.getItem('token');
    console.log(token);
    const postDatas = await axios.post(
      `${backendUrl}/todo/add`,
      { title: title },
      {
        headers: { Authorization: token },
      }
    );
    return;
  } catch (er) {
    return console.log('add todo error->', er.message);
  }
};
export const patchTodo = (id, title) => async (dispatch, state) => {
  try {
    let token = localStorage.getItem('token');
    await axios.patch(
      `${backendUrl}/todo/update`,
      { id, title: title },
      {
        headers: { Authorization: token },
      }
    );
    return;
  } catch (er) {
    return console.log('patch todo errror->', er.message);
  }
};
export const deleteTodo = (id) => async (dispatch, state) => {
  try {
    let token = localStorage.getItem('token');
    const deleteSingleTodo = await axios.delete(
      `${backendUrl}/todo/delete/${id}`,
      {
        headers: {
          Authorization: token,
        },
      }
    );
    return;
  } catch (er) {
    return console.log(er.message);
  }
};
