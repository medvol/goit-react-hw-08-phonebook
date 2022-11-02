import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';
import { addContact } from 'redux/contacts/operations';
import { Box, TextField, Button, Typography } from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import FormHelperText from '@mui/material/FormHelperText';

// import { LabelInput, FormInput, SubmitButton } from './ContactForm.styled';

export default function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const [errorName, setErrorName] = useState(false);
  const [errorPhone, setErrorPhone] = useState(false);

  const onChangeErrorName = event => {
    const regex = "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$";
    if(event.target.value !== regex) setErrorName(true);
  }

  const onChangeErrorPhone = event => {
    const regex =
      "+?d{1,4}?[-.s]?(?d{1,3}?)?[-.s]?d{1,4}[-.s]?d{1,4}[-.s]?d{1,9}";
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

    dispatch(addContact(contact));
    form.reset();
  };

  return (
    <Box
      sx={{
        width: '65%',
        display: 'flex',
        mt: 6,
        mx: 'auto',
        py: 5,
        boxShadow: 3,
      }}
    >
      <Box
        sx={{
          width: '50%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          px: 4,
          borderRight: 1,
          borderColor: 'text.secondary',
        }}
      >
        <Typography
          variant="h5"
          component="h3"
          sx={{
            mb: 4,
            color: 'text.primary',
            fontWeight: 500,
          }}
        >
          New contact
        </Typography>
        <Typography
          variant="body2"
          component="p"
          sx={{ mb: 6, color: 'text.secondary' }}
        >
          You can add your contact here
        </Typography>
        <PersonAddIcon sx={{ fontSize: 80, color: 'text.secondary' }} />
      </Box>
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
          <FormHelperText error={errorName} sx={{ pl: 1,}}>
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
    </Box>
  );
}

// export default function FormPropsTextFields() {
//   return (

//   );
// }

// <Box
//     border="normal"
//     p={3}
//     mb={5}
//     mt={3}
//     display="flex"
//     flexDirection="column"
//     onSubmit={handleSubmit}
//     as="form"
//   >
//     <label htmlFor="name">Name</label>
//     <input
//       type="text"
//       name="name"
//       pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//       title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//       required
//     />
//     <label htmlFor="number">Number</label>
//     <input
//       type="tel"
//       name="number"
//       pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//       title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//       required
//     />
//     <button type="submit">Add contact</button>
//   </Box>
