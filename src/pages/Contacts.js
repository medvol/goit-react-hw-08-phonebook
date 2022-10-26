import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';

export default function Contacts() {
      const dispatch = useDispatch();

      useEffect(() => {
        dispatch(fetchContacts());
      }, [dispatch]);
  return (
    <div>Contacts</div>
  )
}
