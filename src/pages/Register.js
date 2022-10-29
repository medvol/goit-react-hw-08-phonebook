
import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { Box, Container, Typography} from '@mui/material';

export default function Register() {
  return (
    <Container component="main">
      <Box sx={{ width: '60%', mx: 'auto', my: 4 }}>
        <Typography
          variant="body1"
          component="p"
          sx={{ color: 'text.secondary', mb: 2, fontWeight: 500 }}
        >
          SIGNUP
        </Typography>
        <Typography
          variant="h4"
          component="h2"
          sx={{ color: 'text.primary', mb: 1, fontWeight: 700 }}
        >
          Create an account
        </Typography>
        <Typography
          variant="body1"
          component="p"
          sx={{ color: 'text.secondary', mb: 3 }}
        >
          Fill out the form to get started.
        </Typography>

        <RegisterForm />
      </Box>
    </Container>
  );
}
