import React from 'react';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { Button } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';

export default function LogOutButton() {
   const dispatch = useDispatch();
  return (
    <>
      <Button
        variant="text"
        color="secondary"
        size="medium"
        startIcon={<LogoutIcon />}
        type="button"
        onClick={() => dispatch(logOut())}
       
      ></Button>
    </>
  );
}
