import { Outlet } from 'react-router-dom';
// import { Toaster } from 'react-hot-toast';
import { AppBarComponent } from './AppBar/AppBar';
import { Suspense } from 'react';

export const Layout = () => {
  return (
    <div style={{ maxWidth: 1560, margin: '0 auto', padding: '0 16px' }}>
      <AppBarComponent />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      {/* <Toaster position="top-right" reverseOrder={false} /> */}
    </div>
  );
};
