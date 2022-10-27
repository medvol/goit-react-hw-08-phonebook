import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { ContactList } from 'components/ContactList/ContactList';
import {ContactForm} from 'components/ContactForm/ContactForm'


export default function Contacts() {
      const dispatch = useDispatch();

      useEffect(() => {
        dispatch(fetchContacts());
      }, [dispatch]);
  return (
    <>
      <div>Contacts Hello</div>
      <ContactForm />
      <ContactList />
    </>
  );
}
