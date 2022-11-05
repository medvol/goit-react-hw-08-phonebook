import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';


export const PrivateRoute = ({ redirectTo = '/' }) => {
  const { isLoggedIn, isRefreshing } = useAuth();
  const shouldRedirect = !isLoggedIn && !isRefreshing;
  if (shouldRedirect ) <Navigate to={redirectTo} />
  return <Outlet/>
};
