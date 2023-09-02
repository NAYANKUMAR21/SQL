// store.js
import { legacy_createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';

import AuthReducer from './Reducers/Auth.reducer';

const rootReducer = combineReducers({
  User: AuthReducer,
});
const store = legacy_createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store;
