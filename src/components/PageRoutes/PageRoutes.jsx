import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from 'components/Layout';
import { PrivateRoute } from 'components/PrivateRoute';
import { RestrictedRoute } from 'components/RestrictedRoute';
import ContactForm from 'components/ContactForm/ContactForm';

const HomePage = lazy(() => import('pages/Home'));
const RegisterPage = lazy(() => import('pages/Register'));
const LoginPage = lazy(() => import('pages/Login'));
const ContactsPage = lazy(() => import('pages/Contacts'));

export const PageRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegisterPage />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route path="*" element={<div>Not Found</div>} />
      </Route>
      <Route
        path="/contacts"
        element={
          <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
        }
      >
        
        <Route index element={<div>allcontacts</div>} />
           <Route
        path="addcontact"
        element={
          <PrivateRoute redirectTo="/login" component={<ContactForm />} />
        }
      />
        
        <Route path="favorites" element={<div>favorites</div>} />
        <Route path="coworkers" element={<div>coWorkers</div>} />
        <Route path="family" element={<div>family</div>} />
        <Route path="friends" element={<div>friends</div>} />
        <Route path="other" element={<div>others</div>} />
        <Route path="*" element={<div>Not Found</div>} />
      </Route>
    </Routes>
  );
};
