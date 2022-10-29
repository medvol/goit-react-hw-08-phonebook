import {useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Typography, Box, Container, Button } from '@mui/material';
import styled from '@mui/material/styles/styled';
import Footer from 'components/Footer/Footer'
import imagePhone from 'assets/phone.jpg';
import { textAnimation } from 'services/mainPageAnimation';

const Holder = styled(Box)((animationBox) => ({
  animation: animationBox && `${textAnimation} 0.8s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`,
}))

export default function Home() {
  const [animationBox, setAnimationBox] = useState(false);

  useEffect(() => {
    setAnimationBox(true);
    }
  , [])
  
  return (
    <>
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
        <Holder animationBox={animationBox}>
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
        </Holder>

        <Box
          component="img"
          sx={{
            width: '50%',
          }}
          alt="phone"
          src={imagePhone}
          loading="lazy"
        />
      </Container>
      <Footer />
    </>
  );
}
