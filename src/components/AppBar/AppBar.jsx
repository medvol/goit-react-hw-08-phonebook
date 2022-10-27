import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { useAuth } from 'hooks/useAuth';
import { AppBar, Toolbar } from '@mui/material';

export const AppBarComponent = () => {
  const { isLoggedIn } = useAuth();

  return (
    <AppBar
      position="static"
      component="header"
      sx={{
        flexGrow: 1,
        bgcolor: 'background.primary',
        borderRadius: 2,
      }}
    >
      <Toolbar>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Toolbar>
    </AppBar>
  );
};
