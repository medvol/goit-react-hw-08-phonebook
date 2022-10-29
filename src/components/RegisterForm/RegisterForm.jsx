import { useDispatch } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { Box, TextField, Typography, Link, Button } from '@mui/material';
import { register } from 'redux/auth/operations';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { mb: 3, width: '100%' },
        py: 3,
        px: 4,
        borderRadius: 2,
        boxShadow: 3,
      }}
      onSubmit={handleSubmit}
      autoComplete="off"
    >
      <div>
        <Typography
          variant="subtitle2"
          component="p"
          sx={{ color: 'text.primary', mb: 2 }}
        >
          Enter your name
        </Typography>
        <TextField
          id="outlined-name"
          label="Your name*"
          type="text"
          color="secondary"
          size="normal"
          sx={{
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: 'primary.main',
              },
            },
          }}
        />
      </div>
      <div>
        <Typography
          variant="subtitle2"
          component="p"
          sx={{ color: 'text.primary', mb: 2 }}
        >
          Enter your email
        </Typography>
        <TextField
          id="outlined-email"
          label="Email*"
          type="text"
          color="secondary"
          size="normal"
          sx={{
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: 'primary.main',
              },
            },
          }}
        />
      </div>
      <div>
        <Typography
          variant="subtitle2"
          component="p"
          sx={{ color: 'text.primary', mb: 2 }}
        >
          Enter your password
        </Typography>
        <TextField
          id="outlined-password-input"
          label="Password*"
          type="password"
          autoComplete="current-password"
          color="secondary"
          size="normal"
          sx={{
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: 'primary.main',
              },
            },
          }}
        />
      </div>
      <Box
        sx={{
          display: 'flex',
          px: 8,
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Typography
          variant="subtitle2"
          component="p"
          sx={{ fontWeight: 500, color: 'text.primary' }}
        >
          Already have an account?
          <Link
            component={RouterLink}
            to="/login"
            color="secondary"
            underline="none"
            sx={{ px: 1 }}
          >
            Login
          </Link>
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          type="submit"
          sx={{ textTransform: 'none', color: 'text.primary' }}
        >
          Sign Up
        </Button>
      </Box>
      <Typography
        variant="subtitle2"
        component="p"
        sx={{
          textAlign: 'center',
          mt: 3,
          color: 'primary.main',
          fontWeight: 400,
        }}
      >
        By clicking "Sign up" button you agree with our Privacy policy.
      </Typography>
    </Box>
  );
};
