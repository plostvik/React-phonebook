import { createAction } from '@reduxjs/toolkit';

const registerUserRequest = createAction('REGISTER_USER_REQUEST');
const registerUserSuccess = createAction('REGISTER_USER_SUCCESS');
const registerUserError = createAction('REGISTER_USER_ERROR');

const logoutRequest = createAction('LOGOUT_REQUEST');
const logoutSuccess = createAction('LOGOUT_SUCCESS');
const logoutError = createAction('LOGOUT_ERROR');

const loginRequest = createAction('LOGIN_REQUEST');
const loginSuccess = createAction('LOGIN_SUCCESS');
const loginError = createAction('LOGIN_ERROR');

const getCurrentUserRequest = createAction('auth/getCurrentUserRequest');
const getCurrentUserSuccess = createAction('auth/getCurrentUserSuccess');
const getCurrentUserError = createAction('auth/getCurrentUserError');

const setUserTokenToNull = createAction('auth/setUserTokenToNull');

export {
  registerUserError,
  registerUserSuccess,
  registerUserRequest,
  loginRequest,
  loginSuccess,
  logoutError,
  logoutRequest,
  logoutSuccess,
  loginError,
  getCurrentUserRequest,
  getCurrentUserSuccess,
  getCurrentUserError,
  setUserTokenToNull,
};
