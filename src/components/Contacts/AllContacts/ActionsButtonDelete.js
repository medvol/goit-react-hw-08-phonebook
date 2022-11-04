import { useState } from 'react';
import { useDispatch } from 'react-redux';
import DeleteIcon from '@mui/icons-material/Delete';
import {
  Button,
  IconButton,
  Tooltip,
  Zoom,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,  
} from '@mui/material';
import { deleteContact } from 'redux/contacts/operations';

export default function ActionsButtonDelete({ id }) {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Tooltip title="Delete" TransitionComponent={Zoom}>
        <IconButton
          color="primary"
          onClick={handleClickOpen}
          sx={{ '&:hover': { color: 'secondary.main' } }}
        >
          <DeleteIcon />
        </IconButton>
      </Tooltip>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent sx={{ backgroundColor: 'background.primary' }}>
          <DialogContentText id="alert-dialog-description">
            Do you really want to delete the contact?
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ backgroundColor: 'background.primary' }}>
          <Button onClick={handleClose}>No</Button>
          <Button
            onClick={(() => dispatch(deleteContact(id)))}
            autoFocus
          >
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
