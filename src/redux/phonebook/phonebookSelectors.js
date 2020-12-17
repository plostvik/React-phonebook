import { createSelector } from '@reduxjs/toolkit';

const getContacts = state => state.contacts;
const getMessage = state => state.message;
const getLoading = state => state.loading;
const getFilter = state => state.filter;

const getvisibleContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  },
);

export { getContacts, getMessage, getLoading, getFilter, getvisibleContacts };
