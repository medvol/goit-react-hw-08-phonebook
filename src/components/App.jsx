import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// import { Box } from './Box';
import { PageRoutes } from './PageRoutes/PageRoutes';
import { useAuth } from 'hooks/useAuth';
import { refreshUser } from 'redux/auth/operations';
import { Box} from '@mui/system';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#a5a7ac',
    },

    secondary: {
      main: '#f57c00',
    },
    background: {
      primary: '#2d354e',
      secondary: '#1a2138',
    },

    text: {
      primary: '#eeeeef',
      secondary: '#a5a7ac',
    },
    action: {
      active: '#f57c00',
    },
  },
});

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          bgcolor: 'background.secondary',
          boxShadow: 1,          
          p: 2,
          minWidth: 1560,
        }}
      >
        <PageRoutes />
      </Box>
    </ThemeProvider>
  );
};
