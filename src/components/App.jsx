import { useEffect, Suspense } from 'react';
import { useDispatch } from 'react-redux';
import { PageRoutes } from './PageRoutes/PageRoutes';
import { useAuth } from 'hooks/useAuth';
import { refreshUser } from 'redux/auth/operations';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from 'constants/theme';

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Suspense fallback={null}>
      <ThemeProvider theme={theme}>
        <PageRoutes />
      </ThemeProvider>
    </Suspense>
  );
};
