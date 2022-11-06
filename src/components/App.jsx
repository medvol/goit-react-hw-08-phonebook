import { useEffect, Suspense } from 'react';
import { useDispatch } from 'react-redux';
import { PageRoutes } from './PageRoutes/PageRoutes';
import { useAuth } from 'hooks/useAuth';
import { refreshUser } from 'redux/auth/operations';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from 'constants/theme';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
        <ToastContainer
          position="bottom-left"
          autoClose={3000}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </ThemeProvider>
    </Suspense>
  );
};
