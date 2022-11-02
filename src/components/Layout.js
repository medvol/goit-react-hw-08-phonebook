import { Outlet } from 'react-router-dom';
// import { Toaster } from 'react-hot-toast';
import { AppBarComponent } from './AppBar/AppBar';

export const Layout = () => {
  return (
    <div style={{ height: '100vh' }}>
      <AppBarComponent />
      <Outlet />
      {/* <Toaster position="top-right" reverseOrder={false} /> */}
    </div>
  );
};
