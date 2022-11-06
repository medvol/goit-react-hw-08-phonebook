import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from 'components/Layout';
import { PrivateRoute } from 'components/PrivateRoute';
import { RestrictedRoute } from 'components/RestrictedRoute';
import ContactForm from 'components/ContactForm/ContactForm';
import AllContacts from 'components/Contacts/AllContacts/AllContacts';
import NotFoundPage from 'components/NotFoundPage/NotFoundPage';

const HomePage = lazy(() => import('pages/Home'));
const RegisterPage = lazy(() => import('pages/Register'));
const LoginPage = lazy(() => import('pages/Login'));
const ContactsPage = lazy(() => import('pages/Contacts'));

export const PageRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route element={<RestrictedRoute redirectTo="/contacts" />}>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>
      </Route>
      <Route element={<PrivateRoute redirectTo="/login" />}>
        <Route path="/contacts" element={<ContactsPage />}>
          <Route index element={<AllContacts />} />
          <Route path="addcontact" element={<ContactForm />} />
          <Route path="favorites" element={<div>favorites</div>} />
          <Route path="coworkers" element={<div>coWorkers</div>} />
          <Route path="family" element={<div>family</div>} />
          <Route path="friends" element={<div>friends</div>} />
          <Route path="other" element={<div>others</div>} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

