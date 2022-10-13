import { useSelector } from 'react-redux';
import { Box } from './Box';
import { Form } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { getContacts, getFilter } from './common/selectors';

export const App = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const getVisibleContact = () => {
    const normalizeFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
  };

  const visibleContact = getVisibleContact();

  return (
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
      <h1>Phonebook</h1>
      <Form />
      <h2>Contacts</h2>
      <Filter />
      <ContactList contacts={visibleContact} />
    </Box>
  );
};
