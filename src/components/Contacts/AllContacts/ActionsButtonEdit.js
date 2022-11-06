import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  Box,
  TextField,
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
import { useForm, Controller } from 'react-hook-form';
import { toast } from 'react-toastify';
import { ErrorMessage } from '@hookform/error-message';

export default function ActionsButtonEdit({ id }) {
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
      id,
      name,
      number,
    };

    dispatch(editContact(contact));
    toast.success(`${name} successfully edit`);

    reset();
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
          onSubmit={handleSubmit(onSubmit)}
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
