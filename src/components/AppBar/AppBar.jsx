import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { useAuth } from 'hooks/useAuth';
import { AppBar, Toolbar, Container } from '@mui/material';

export const AppBarComponent = () => {
  const { isLoggedIn } = useAuth();

  return (
    <AppBar
      position="static"
      component="header"
      sx={{
        width: '100%',
        bgcolor: 'background.primary',
      }}
    >
      <Container>
        <Toolbar
          sx={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 3,
          }}
        >
          <Navigation />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
