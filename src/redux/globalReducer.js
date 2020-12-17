import { createReducer } from '@reduxjs/toolkit';

import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  getContactsRequest,
  getContactsSuccess,
  getContactsError,
  removeContactRequest,
  removeContactSuccess,
  removeContactError,
  setMessageToNull,
} from './phonebook/phonebookActions';

import {
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
} from './auth/authActions';

const loadingReducer = createReducer(false, {
  [registerUserRequest]: () => true,
  [registerUserSuccess]: () => false,
  [registerUserError]: () => false,
  [loginError]: () => false,
  [loginRequest]: () => true,
  [loginSuccess]: () => false,
  [logoutError]: () => false,
  [logoutRequest]: () => true,
  [logoutSuccess]: () => false,
  [getCurrentUserError]: () => false,
  [getCurrentUserRequest]: () => true,
  [getCurrentUserSuccess]: () => false,
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,
  [getContactsRequest]: () => true,
  [getContactsSuccess]: () => false,
  [getContactsError]: () => false,
  [removeContactRequest]: () => true,
  [removeContactSuccess]: () => false,
  [removeContactError]: () => false,
});

const errorReducer = createReducer(null, {
  [registerUserRequest]: () => null,
  [loginRequest]: () => null,
  [logoutRequest]: () => null,
  [getCurrentUserRequest]: () => null,
  [addContactRequest]: () => null,
  [getContactsRequest]: () => null,
  [removeContactRequest]: () => null,
  [setMessageToNull]: () => null,
  [registerUserError]: (state, action) => action.payload,
  [loginError]: (state, action) => action.payload,
  [logoutError]: (state, action) => action.payload,
  [getCurrentUserError]: (state, action) => action.payload,
  [addContactError]: (state, action) => action.payload,
  [getContactsError]: (state, action) => action.payload,
  [removeContactError]: (state, action) => action.payload,
});

export { loadingReducer, errorReducer };
