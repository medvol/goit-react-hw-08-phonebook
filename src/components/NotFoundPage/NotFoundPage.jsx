import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import NotFoundImage from 'assets/notfound.png';
import { Box, Typography, Button } from '@mui/material';

export default function NotFoundPage() {
  return (
    <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', gap: 10 }}>
      <Box
        component="img"
        src={NotFoundImage}
        alt="not found page"
        sx={{
          width: '50%',
        }}
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Typography
          variant="h1"
          component="h2"
          sx={{ fontWeight: 700, color: 'text.primary' }}
        >
          404
        </Typography>
        <Typography
          variant="h6"
          component="p"
          sx={{ width: '75%', mb: 3, color: 'primary.main' }}
        >
          Oops! Looks like you followed a bad link. If you think this is a
          problem with us, please tell us
        </Typography>
        <Button
          variant="contained"
          component={RouterLink}
          to="/"
          color="secondary"
          size="medium"
          sx={{
            width: 110,
            display: 'flex',
            alignItems: 'center',
            mt: 2,
            px: 1,
            textTransform: 'none',
            boxShadow: 3,
            fontWeight: 500,
            color: 'text.primary',
          }}
        >
          Back home
        </Button>
      </Box>
    </Box>
  );
}
