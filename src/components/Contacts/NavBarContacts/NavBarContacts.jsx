import React from 'react';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { UserMenu } from 'components/UserMenu/UserMenu';
import NavList from './NavList';



export default function NavBarContacts() {
  return (
    <Box
      component="aside"
      sx={{
        height: '100vh',
        maxWidth: 260,
        bgcolor: 'background.primary',
        p: 3,
        borderRadius: 2,
        boxShadow: 3,
      }}
    >
      <UserMenu />
      <Link to="addcontact">AddContact</Link>
      <NavList />
    </Box>
  );
}
