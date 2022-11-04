import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';
import { editContact } from 'redux/contacts/operations';
import { Box, TextField, Button } from '@mui/material';
import FormHelperText from '@mui/material/FormHelperText';

export default function EditContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const [errorName, setErrorName] = useState(false);
  const [errorPhone, setErrorPhone] = useState(false);

  const onChangeErrorName = event => {
    const regex = "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$";
    if (event.target.value !== regex) setErrorName(true);
  };

  const onChangeErrorPhone = event => {
    const regex =
      '+?d{1,4}?[-.s]?(?d{1,3}?)?[-.s]?d{1,4}[-.s]?d{1,4}[-.s]?d{1,9}';
    if (event.target.value !== regex) setErrorPhone(true);
  };

  const handleSubmit = event => {
    event.preventDefault();
    setErrorName(false);
    setErrorPhone(false);
    const form = event.currentTarget;
    const { name, number } = form;
    const contact = {
      name: name.value,
      number: number.value,
    };

    const duplicateContact = contacts.find(
      contact => contact.name.toLowerCase() === name.value.toLowerCase()
    );

    if (duplicateContact)
      return window.alert(`${name.value} is already in contacts`);

    dispatch(editContact(contact));
    form.reset();
  };

  return (
    <Box
      component="form"
      noValidate
      onSubmit={handleSubmit}
      sx={{
        '& .MuiTextField-root': { m: 1, width: '90%' },
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        pl: 5,
      }}
      autoComplete="off"
    >
      <TextField
        id="standard-name"
        label="Your name"
        type="text"
        name="name"
        error={errorName}
        onChange={onChangeErrorName}
        required
        variant="standard"
      />
      {errorName && (
        <FormHelperText error={errorName} sx={{ pl: 1 }}>
          Name may contain only letters, apostrophe, dash and spaces.
        </FormHelperText>
      )}
      <TextField
        id="standard-phone"
        label="Phone number"
        type="tel"
        name="number"
        error={errorPhone}
        onChange={onChangeErrorPhone}
        required
        variant="standard"
      />
      {errorPhone && (
        <FormHelperText error={errorPhone} sx={{ pl: 1 }}>
          Phone number must be digits and can contain spaces, dashes,
          parentheses and can start with +
        </FormHelperText>
      )}

      <Button
        variant="contained"
        component="button"
        type="submit"
        color="secondary"
        size="medium"
        sx={{
          width: 120,
          mt: 5,
          boxShadow: 3,
          fontWeight: 500,
          color: 'text.primary',
        }}
      >
        Create
      </Button>
    </Box>
  );
}
