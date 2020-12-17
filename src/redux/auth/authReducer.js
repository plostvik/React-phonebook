import { combineReducers, createReducer } from '@reduxjs/toolkit';
import {
  registerUserSuccess,
  loginSuccess,
  logoutSuccess,
  getCurrentUserSuccess,
  setUserTokenToNull,
} from './authActions';

const initialUserState = {
  name: null,
  email: null,
};

const userReducer = createReducer(initialUserState, {
  [registerUserSuccess]: (state, { payload }) => payload.user,
  [loginSuccess]: (state, { payload }) => payload.user,
  [logoutSuccess]: () => initialUserState,
  [getCurrentUserSuccess]: (state, { payload }) => payload,
});

const token = createReducer(null, {
  [loginSuccess]: (_, { payload }) => payload.token,
  [registerUserSuccess]: (_, { payload }) => payload.token,
  [logoutSuccess]: () => null,
  [setUserTokenToNull]: () => null,
});

const authReducer = combineReducers({
  user: userReducer,
  token,
});

export default authReducer;
