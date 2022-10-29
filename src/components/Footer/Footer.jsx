import React from 'react';
import { Container, Typography, Box } from '@mui/material';

export default function Footer() {
    return (
      <Box component="footer" sx={{ py:1, borderTop: 1, textAlign:'center', color:'text.secondary' }}>
        <Container>
          <Typography  variant='body1' component='p'>
            © Medvid Oleh. 2022, Ukraine. All rights reserved
          </Typography>
        </Container>
      </Box>
    );
}
