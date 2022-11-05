import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { selectContacts } from 'redux/contacts/selectors';
import { addContact } from 'redux/contacts/operations';
import { Box, TextField, Button, Typography } from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import FormHelperText from '@mui/material/FormHelperText';

export default function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  let schema = yup.object().shape({
    name: yup
      .string()
      .required()
      .matches(/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/)
      .trim(),
    number: yup
      .string()
      .matches(phoneRegExp, 'Phone number is not valid')
      .nullable(),
  });

  const handleSubmit = async event => {
    event.preventDefault();
    setError(false);

    const form = event.currentTarget;
    const { name, number } = form;
    const contact = {
      name: name.value,
      number: number.value,
    };
    try {
      const validateContact = await schema.validate(contact);

      const duplicateContact = contacts.find(
        contact => contact.name.toLowerCase() === name.value.toLowerCase()
      );

      if (duplicateContact)
        return window.alert(`${name.value} is already in contacts`);

      dispatch(addContact(validateContact));
      navigate('/contacts');
      form.reset();
    } catch (error) {
      setError(true);
    }
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
          error={error}
          // onChange={onChangeErrorName}
          required
          variant="standard"
        />
        {error && (
          <FormHelperText error={error} sx={{ pl: 1 }}>
            Name may contain only letters, apostrophe, dash and spaces.
          </FormHelperText>
        )}
        <TextField
          id="standard-phone"
          label="Phone number"
          type="tel"
          name="number"
          error={error}
          // onChange={onChangeErrorPhone}
          required
          variant="standard"
        />
        {error && (
          <FormHelperText error={error} sx={{ pl: 1 }}>
            Phone number must be digits and can't contain spaces, dashes and
            more 10 digits
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
