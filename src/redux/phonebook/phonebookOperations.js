import axios from 'axios';
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
} from './phonebookActions.js';

import { setUserTokenToNull } from '../auth/authActions';

const addContact = (name, number) => dispatch => {
  dispatch(addContactRequest());
  axios
    .post('/contacts', { name, number })
    .then(response => {
      dispatch(addContactSuccess(response.data));
    })
    .catch(error => {
      dispatch(addContactError(error.message));
    });
};

const getContacts = () => (dispatch, getState) => {
  const test = getState();
  axios.defaults.headers.common.Authorization = `Bearer ${test.auth.token}`;
  dispatch(getContactsRequest());
  axios
    .get('/contacts')
    .then(response => {
      dispatch(getContactsSuccess(response.data));
    })
    .catch(error => {
      if (error.response.statusText === 'Unauthorized') {
        dispatch(setUserTokenToNull());
        return;
      }
      dispatch(getContactsError(error.message));
      setTimeout(() => {
        dispatch(setMessageToNull());
      }, 1500);
    });
};

const removeContact = id => dispatch => {
  dispatch(removeContactRequest());
  axios
    .delete(`/contacts/${id}`)
    .then(() => {
      dispatch(removeContactSuccess(id));
    })
    .catch(error => {
      dispatch(removeContactError(error.message));
      setTimeout(() => {
        dispatch(setMessageToNull());
      }, 1500);
    });
};

export { addContact, getContacts, removeContact };
