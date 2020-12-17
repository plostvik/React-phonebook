import { createAction } from '@reduxjs/toolkit';

const addContactRequest = createAction('ADD_CONTACT_REQUEST');
const addContactSuccess = createAction('ADD_CONTACT_SUCCESS');
const addContactError = createAction('ADD_CONTACT_ERROR');

const getContactsRequest = createAction('GET_CONTACTS_REQUEST');
const getContactsSuccess = createAction('GET_CONTACTS_SUCCESS');
const getContactsError = createAction('GET_CONTACTS_ERROR');

const removeContactRequest = createAction('REMOVE_CONTACT_REQUEST');
const removeContactSuccess = createAction('REMOVE_CONTACT_SUCCESS');
const removeContactError = createAction('REMOVE_CONTACT_ERROR');

const filterChange = createAction('FILTER_CHANGE');
const setMessageToNull = createAction('SET_MESSAGE_TO_NULL');

export {
  addContactRequest,
  addContactSuccess,
  addContactError,
  getContactsRequest,
  getContactsSuccess,
  getContactsError,
  removeContactRequest,
  removeContactSuccess,
  removeContactError,
  filterChange,
  setMessageToNull,
};
