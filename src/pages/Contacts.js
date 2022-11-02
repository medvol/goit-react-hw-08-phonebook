
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
// import { ContactList } from 'components/ContactList/ContactList';
// import {ContactForm} from 'components/ContactForm/ContactForm'
import { Outlet } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import NavBarContacts from 'components/Contacts/NavBarContacts/NavBarContacts';
import LogOutButton from 'components/LogOutButton/LogOutButton';

export default function Contacts() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
   
      <Box component="main" sx={{ display: 'flex', px: 3, py: 2 }}>
        <NavBarContacts />
        <Box sx={{ width: '80%', px: 3 }}>
          <Box
            sx={{
              display: 'flex',
              width: '100%',
              p: 2,
              alignItems: 'center',
              justifyContent: 'space-between',
              borderRadius: 2,
              boxShadow: 3,
            }}
          >
            <Typography
              variant="h4"
              component="h2"
              color="text.primary"
              sx={{ fontWeight: '700' }}
            >
              Contacts
            </Typography>
            <LogOutButton />
          </Box>
          <Outlet />
        </Box>

        {/* <ContactForm />
      <ContactList /> */}
      </Box>
    
  );
}
