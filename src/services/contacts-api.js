const baseURL = 'http://localhost:7070/contacts';

const fetchContacts = () => {
  return fetch(baseURL).then(response => {
    if (response.ok) {
      return response.json();
    }

    return Promise.reject(new Error('Bad request!'));
  });
};

const addContact = contact => {
  return fetch(baseURL, {
    method: 'POST',
    body: JSON.stringify(contact),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error('Bad request!'));
  });
};

const deleteContact = contactId => {
  return fetch(`${baseURL}/${contactId}`, {
    method: 'DELETE',
  }).then(response => {
    if (!response.ok) {
      return Promise.reject(new Error('Bad request!'));
    }
  });
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { fetchContacts, addContact, deleteContact };
