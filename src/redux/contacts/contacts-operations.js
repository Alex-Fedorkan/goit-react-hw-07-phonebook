import contactsAPI from '../../services/contacts-api';
import {
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
} from './contacts-actions';

export const fetchContacts = () => dispatch => {
  dispatch(fetchContactsRequest());

  contactsAPI
    .fetchContacts()
    .then(contacts => dispatch(fetchContactsSuccess(contacts)))
    .catch(error => dispatch(fetchContactsError(error)));
};

export const addContact = contact => dispatch => {
  dispatch(addContactRequest());

  contactsAPI
    .addContact(contact)
    .then(response => dispatch(addContactSuccess(response)))
    .catch(error => dispatch(addContactError(error)));
};

export const deleteContact = contactId => dispatch => {
  dispatch(deleteContactRequest());

  contactsAPI
    .deleteContact(contactId)
    .then(() => dispatch(deleteContactSuccess(contactId)))
    .catch(error => dispatch(deleteContactError(error)));
};
