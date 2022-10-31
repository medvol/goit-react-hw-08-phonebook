import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
// import { ContactList } from 'components/ContactList/ContactList';
// import {ContactForm} from 'components/ContactForm/ContactForm'
import { Outlet } from 'react-router-dom';
import { Box} from '@mui/material';
import NavBarContacts from 'components/Contacts/NavBarContacts/NavBarContacts'


export default function Contacts() {
      const dispatch = useDispatch();

      useEffect(() => {
        dispatch(fetchContacts());
      }, [dispatch]);
  return (
    <Box component='main' sx={{display:'flex', px:3, py:2}}>
      
      <NavBarContacts/>
      <Outlet/>
      {/* <ContactForm />
      <ContactList /> */}
    </Box>
  );
}
