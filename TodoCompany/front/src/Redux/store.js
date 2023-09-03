// store.js
import { legacy_createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';

import AuthReducer from './Reducers/Auth.reducer';
import TodoReducer from './Reducers/Todo.reducer';

const rootReducer = combineReducers({
  User: AuthReducer,
  Todo: TodoReducer,
});
const store = legacy_createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store;
