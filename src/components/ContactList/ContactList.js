import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getVisibleContacts } from '../../redux/contacts/contacts-selectors';
import contactsAPI from '../../services/contacts-api';
import {
  fetchContacts,
  deleteContact,
} from '../../redux/contacts/contacts-operations';
import ContactItem from './ContactItem/ContactItem';
import s from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts(contactsAPI.fetchContacts()));
  }, [dispatch]);

  return (
    <ul className={s.list}>
      {contacts.map(({ id, name, number }) => (
        <ContactItem
          key={id}
          id={id}
          name={name}
          number={number}
          deleteContact={id => dispatch(deleteContact(id))}
        />
      ))}
    </ul>
  );
};

export default ContactList;
