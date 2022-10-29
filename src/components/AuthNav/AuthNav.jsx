import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';

export const AuthNav = () => {
  return (
    <>
      <Button
        variant="contained"
        component={Link}
        to="/login"
        aria-label="signin"
        startIcon={<LoginIcon />}
        size="small"
        color="secondary"
        sx={{
          color: 'text.primary',
          textTransform: 'none',
          '&:hover': {
            backgroundColor: 'rgb(230, 81, 0)',
          },
        }}
      >
        LogIn
      </Button>
    </>
  );
};
