import { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';
import {
  Box,
  TextField,
  FormHelperText,
  Button,
  IconButton,
  Tooltip,
  Zoom,
  Dialog,
  DialogContent,
  DialogTitle,
} from '@mui/material';
import { editContact } from 'redux/contacts/operations';
import EditIcon from '@mui/icons-material/Edit';

export default function ActionsButtonEdit({ id }) {
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(false);

  const dispatch = useDispatch();

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

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async event => {
    event.preventDefault();
    setError(false);
    const form = event.currentTarget;
    const { name, number } = form;

    const contact = {
      id,
      name: name.value,
      number: number.value,
    };

    try {
      const validateContact = await schema.validate(contact);

      dispatch(editContact(validateContact));

      form.reset();
    } catch (error) {
      setError(true);
    }
  };
  return (
    <>
      <Tooltip title="Edit" TransitionComponent={Zoom}>
        <IconButton
          color="primary"
          sx={{ '&:hover': { color: 'secondary.main' } }}
          onClick={handleClickOpen}
        >
          <EditIcon />
        </IconButton>
      </Tooltip>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle
          id="alert-dialog-title"
          sx={{ backgroundColor: 'background.primary' }}
        >
          {'Edit Contact'}
        </DialogTitle>
        <Box
          component="form"
          noValidate
          onSubmit={handleSubmit}
          sx={{
            '& .MuiTextField-root': { m: 1, width: '90%' },
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            pb: 1,
            backgroundColor: 'background.primary',
          }}
          autoComplete="off"
        >
          <DialogContent sx={{ backgroundColor: 'background.primary' }}>
            <TextField
              id="standard-name"
              label="Your name"
              type="text"
              name="name"
              //   value={contactValue.name}
              error={error}
              //   onChange={onChangeContact}

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
              //   value={contactValue.number}
              error={error}
              variant="standard"
            />
            {error && (
              <FormHelperText error={error} sx={{ pl: 1 }}>
                Phone number must be digits and can contain spaces, dashes,
                parentheses and can start with +
              </FormHelperText>
            )}

            <Button
              variant="contained"
              color="secondary"
              size="small"
              onClick={handleClose}
              sx={{
                width: 100,
                mt: 5,
                color: 'text.primary',
                textTransform: 'none',
              }}
            >
              Go back
            </Button>
            <Button
              variant="contained"
              color="secondary"
              size="small"
              type="submit"
              onClick={handleClose}
              sx={{
                width: 100,
                ml: 3,
                mt: 5,
                color: 'text.primary',
                textTransform: 'none',
              }}
            >
              Edit
            </Button>
          </DialogContent>
        </Box>
      </Dialog>
    </>
  );
}
