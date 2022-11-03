import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Typography, Button } from '@mui/material';
import NavList from './NavList';
import { useAuth } from 'hooks/useAuth';
import UserAvatar from 'components/UserAvatar/UserAvatar';

export default function NavBarContacts() {
  const { user } = useAuth();
  return (
    <Box
      component="aside"
      sx={{
        width: 260,        
        display: 'flex',
        flexDirection: 'column',
        bgcolor: 'background.primary',
        p: 3,
        pb:10,
        borderRadius: 2,
        boxShadow: 3,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          alignItems: 'center',
          gap: 3,
          mb: 6,
        }}
      >
        <UserAvatar />
        <Typography variant="body2" component="p" color="secondary">
          Welcome, {user.name}!
        </Typography>
      </Box>
      <Button
        variant="contained"
        component={RouterLink}
        to="addcontact"
        color="secondary"
        size="large"
        sx={{
          mb: 5,
          textTransform: 'none',
          boxShadow: 3,
          fontWeight: 500,
          color: 'text.primary',
        }}
      >
        + Add Contact
      </Button>
      <NavList />
    </Box>
  );
}
