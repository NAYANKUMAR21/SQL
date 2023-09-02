import {
  ADD_TODO_SUCCESS,
  DELETE_TODO_SUCCESS,
  PATCH_TODO_SUCCESS,
  GET_TODO_ERROR,
  GET_TODO_LOADING,
  GET_TODO_SUCCESS,
} from '../Types/Todo.types';
import { initTodo } from '../initializers/todo.init';
const TodoReducer = (state = initTodo, { type, payload }) => {
  switch (type) {
    case GET_TODO_ERROR: {
      return {
        ...state,
        error: true,
        loading: false,
      };
    }
    case GET_TODO_LOADING: {
      return {
        ...state,
        error: false,
        loading: true,
      };
    }
    case GET_TODO_SUCCESS: {
      return {
        ...state,
        error: false,
        loading: false,
        data: payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default TodoReducer;
