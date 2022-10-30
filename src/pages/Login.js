import { LoginForm } from 'components/LoginForm/LoginForm';
import { Box, Container, Typography } from '@mui/material';

export default function Login() {
  return (
    <Container component="main">
      <Box sx={{ width: '60%', mx: 'auto', my: 4 }}>
        <Typography
          variant="body1"
          component="p"
          sx={{ color: 'text.secondary', mb: 2, fontWeight: 500 }}
        >
          LOGIN
        </Typography>
        <Typography
          variant="h4"
          component="h2"
          sx={{ color: 'text.primary', mb: 1, fontWeight: 700 }}
        >
          Welcome back
        </Typography>
        <Typography
          variant="body1"
          component="p"
          sx={{ color: 'text.secondary', mb: 3 }}
        >
          Enter your password
        </Typography>

        <LoginForm />
      </Box>
    </Container>
  );
}
