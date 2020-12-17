import axios from 'axios';
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
} from './authActions';

import { setMessageToNull } from '../phonebook/phonebookActions';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const registerUser = credentials => dispatch => {
  dispatch(registerUserRequest());
  axios
    .post('/users/signup', credentials)
    .then(response => {
      token.set(response.data.token);
      dispatch(registerUserSuccess(response.data));
    })
    .catch(error => {
      dispatch(registerUserError(error.message));
      setTimeout(() => {
        dispatch(setMessageToNull());
      }, 1500);
    });
};

const login = credentials => dispatch => {
  dispatch(loginRequest());
  axios
    .post('/users/login', credentials)
    .then(({ data }) => {
      token.set(data.token);
      dispatch(loginSuccess(data));
    })
    .catch(error => {
      dispatch(loginError(error.message));
      setTimeout(() => {
        dispatch(setMessageToNull());
      }, 1500);
    });
};

const logout = () => dispatch => {
  dispatch(logoutRequest());

  axios
    .post('/users/logout')
    .then(() => {
      token.unset();
      dispatch(logoutSuccess());
    })
    .catch(error => {
      dispatch(logoutError(error.message));
      setTimeout(() => {
        dispatch(setMessageToNull());
      }, 1500);
    });
};

const getCurrentUser = () => (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();

  if (!persistedToken) {
    return;
  }

  token.set(persistedToken);
  dispatch(getCurrentUserRequest());

  axios
    .get('/users/current')
    .then(({ data }) => {
      dispatch(getCurrentUserSuccess(data));
    })
    .catch(error => {
      dispatch(getCurrentUserError(error.message));
      setTimeout(() => {
        dispatch(setMessageToNull());
      }, 1500);
    });
};

export { registerUser, login, logout, getCurrentUser };
