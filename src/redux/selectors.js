import { createSelector } from '@reduxjs/toolkit';
export const getContacts = state => state.contacts;
export const getFilter = state => state.filter;

export const getFilteredContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filterValue) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterValue)
    );
  }
);
