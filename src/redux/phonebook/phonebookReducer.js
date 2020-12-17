import {
  addContactSuccess,
  getContactsSuccess,
  removeContactSuccess,
  filterChange,
} from './phonebookActions.js';
import { createReducer } from '@reduxjs/toolkit';

const initialState = {
  contacts: [],
  filter: '',
};

const addContactFn = (state, action) => [...state, action.payload];
const removeContactFn = (state, action) =>
  state.filter(item => item.id !== action.payload);

const contactsReducer = createReducer(initialState.contacts, {
  [getContactsSuccess]: (state, action) => action.payload,
  [addContactSuccess]: addContactFn,
  [removeContactSuccess]: removeContactFn,
});

const filterReducer = createReducer(initialState.filter, {
  [filterChange]: (state, action) => action.payload,
});
export { contactsReducer, filterReducer };
