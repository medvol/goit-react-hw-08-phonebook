import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Box } from './Box';
import { PageRoutes } from './PageRoutes/PageRoutes';
import { useAuth } from 'hooks/useAuth';
import { refreshUser } from 'redux/auth/operations';

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Box
      width="30%"
      mt={3}
      mb={3}
      ml={6}
      p={4}
      bg="white"
      borderRadius="normal"
      boxShadow="card"
    >
      <PageRoutes />
    </Box>
  );
};
