import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn } = useAuth();
  if(isLoggedIn) <Navigate to={redirectTo} />; 
  return <Outlet/>
};
