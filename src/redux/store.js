import {
  filterReducer,
  contactsReducer,
} from './phonebook/phonebookReducer.js';
import { loadingReducer, errorReducer } from './globalReducer';
import authReducer from './auth/authReducer';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REHYDRATE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    contacts: contactsReducer,
    filter: filterReducer,
    loading: loadingReducer,
    message: errorReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, PAUSE, PERSIST, PURGE, REHYDRATE, REGISTER],
      },
    }),
  ],
});

export const persistor = persistStore(store);
