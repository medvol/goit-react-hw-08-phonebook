import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectContacts } from 'redux/contacts/selectors';
import { addContact } from 'redux/contacts/operations';
import { Box, TextField, Button, Typography } from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { useForm, Controller } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import CustomizedSnackbar from 'components/SnackBar/SnackBar';

export default function ContactForm() {
  const [isOpenNotification, setIsOpenNotification] = useState(false);
  const [severityNotification, setSeverityNotification] = useState('');
  const [messageNotification, setMessageNotification] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const navigate = useNavigate();

  const {
    handleSubmit,
    control,
    register,
    reset,
    formState: { errors },
  } = useForm({
    criteriaMode: 'all',
  });

  const onSubmit = data => {
    const { name, number } = data;
    const contact = {
      name,
      number,
    };
    console.log(contact)

    const duplicateContact = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (duplicateContact) {
      setIsOpenNotification(true);
      setSeverityNotification('error');
      setMessageNotification(`${name} is already in contacts`);
      return
    }
      
    // return window.alert(`${name.value} is already in contacts`);

    dispatch(addContact(contact));
    setIsOpenNotification(true);
    setSeverityNotification('success');
    setMessageNotification(`${name} add to PhoneBook`);
    console.log(isOpenNotification, severityNotification, messageNotification)
    navigate('/contacts');
    
    
    reset();
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
        onSubmit={handleSubmit(onSubmit)}
        sx={{
          '& .MuiTextField-root': { m: 1, width: '90%' },
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          pl: 5,
        }}
        autoComplete="off"
      >
        <Controller
          name="name"
          defaultValue=""
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <TextField
              id="standard-name"
              name="name"
              label="Your name"
              type="text"
              required
              variant="standard"
              {...register('name', {
                required: 'Name is required',
                pattern: {
                  value:
                    /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
                  message:
                    'Name may contain only letters, apostrophe, dash and spaces.',
                },
                minLength: {
                  value: 3,
                  message: 'Name must exceed 3 characters',
                },
              })}
              {...field}
            />
          )}
        />
        <ErrorMessage
          errors={errors}
          name="name"
          render={({ messages }) => {
            console.log('messages', messages);
            return messages
              ? Object.entries(messages).map(([type, message]) => (
                  <p style={{ color: 'red' }} key={type}>
                    {message}
                  </p>
                ))
              : null;
          }}
        />

        <Controller
          name="number"
          defaultValue=""
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <TextField
              label="Phone number"
              type="tel"
              name="number"
              required
              variant="standard"
              {...register('number', {
                required: 'Phone number is required',
                pattern: {
                  value:
                    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
                  message: 'Phone number must be digits',
                },
                minLength: {
                  value: 10,
                  message: 'Phone must exceed 10 characters',
                },
              })}
              {...field}
            />
          )}
        />
        <ErrorMessage
          errors={errors}
          name="number"
          render={({ messages }) => {
            return messages
              ? Object.entries(messages).map(([type, message]) => (
                  <p style={{ color: 'red' }} key={type}>
                    {message}
                  </p>
                ))
              : null;
          }}
        />

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
      <CustomizedSnackbar isOpen={isOpenNotification} severity={severityNotification} message={messageNotification} />
    </Box>
  );
}
