import { createSelector } from '@reduxjs/toolkit';

export const getContacts = state => state.items;
export const getFilter = state => state.filter;
export const getIsLoading = state => state.isLoading;
export const getError = state => state.error;

export const getVisibleContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    ),
);
