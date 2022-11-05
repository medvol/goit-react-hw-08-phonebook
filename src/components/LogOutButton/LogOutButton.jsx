import React from 'react';
import { Button } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';

export default function LogOutButton({onClick}) {
  return (
    <>
      <Button
        variant="text"
        color="secondary"
        size="large"
        startIcon={<LogoutIcon />}
        type="button"
        onClick={onClick}
       
      ></Button>
    </>
  );
}
