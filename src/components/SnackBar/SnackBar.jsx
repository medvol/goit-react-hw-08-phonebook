import React, { useState } from 'react';

import { Snackbar} from '@mui/material';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function CustomizedSnackbar({isOpen, severity, message}) {
  
    
    console.log(isOpen, severity, message)

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

  };

  return (
    <Snackbar open={isOpen} autoHideDuration={3000} onClose={handleClose}>
      <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>
  );
}
