import { Link } from 'react-router-dom';
import { Typography, Box, Button, Container, Fade } from '@mui/material';
import imagePhone from 'assets/phone.png';

export default function Hero() {
  return (
    <Container
      component="main"
      sx={{
        display: 'flex',
        alignItems: 'center',
        pt: 10,
        pb: 10,
        color: 'text.primary',
      }}
    >
     
        <Fade in timeout={3000} easing="cubic-bezier(0.37, 0, 0.63, 1)">
          <Box>
            <Typography variant="h3" component="h1" sx={{ fontWeight: 700 }}>
              {' '}
              Discover the&nbsp;
              <Typography
                variant="h3"
                component="span"
                sx={{ color: 'secondary.main', fontWeight: 700 }}
              >
                PhoneBook
              </Typography>
              &nbsp;for Contacts today!
            </Typography>
            <Typography
              variant="h6"
              component="p"
              sx={{ color: 'text.secondary', mt: 3, mb: 3, fontWeight: 400 }}
            >
              Take your contacts search easy
            </Typography>
            <Button
              variant="contained"
              component={Link}
              to="/register"
              aria-label="registration"
              size="large"
              color="secondary"
              sx={{
                color: 'text.primary',
                textTransform: 'none',
                '&:hover': {
                  backgroundColor: 'rgb(230, 81, 0)',
                },
              }}
            >
              Get Started
            </Button>
          </Box>
        </Fade>
     

      <Fade in timeout={5500} easing="cubic-bezier(0.37, 0, 0.63, 1)">
        <Box
          component="img"
          sx={{
            width: '50%',
          }}
          alt="phone"
          src={imagePhone}
          loading="lazy"
        />
      </Fade>
    </Container>
  );
}
