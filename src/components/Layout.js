import { Outlet } from 'react-router-dom';
import { AppBarComponent } from './AppBar/AppBar';

export const Layout = () => {
 
  return (
    <div >
      <AppBarComponent />
      <Outlet />     
    </div>
  );
};
