import { useState } from 'react';
import { useAuth } from 'hooks/useAuth';
import {
  Box,
  IconButton,
  Typography,
  Tooltip,
  Popover,
  List,
  ListItem,
} from '@mui/material';
import UserAvatar from 'components/UserAvatar/UserAvatar';
import LogOutButton from 'components/LogOutButton/LogOutButton';

export const UserMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const { user } = useAuth();
  const settings = ['Profile', 'Account'];

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'nowrap',
        gap: 2,
      }}
    >
      <Box sx={{ flexGrow: 0 }}>
        <Tooltip title="Open settings">
          <IconButton aria-describedby={id} onClick={handleClick} sx={{ p: 0 }}>
            <UserAvatar />
          </IconButton>
        </Tooltip>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          sx={{ mt: 1 }}
        >
          <List
            sx={{
              color: 'text.secondary',
              backgroundColor: 'background.secondary',
            }}
          >
            {settings.map(setting => (
              <ListItem key={setting}>
                <Typography
                  textAlign="center"
                  sx={{
                    '&:hover': {
                      color: 'rgb(230, 81, 0)',
                    },
                  }}
                >
                  {setting}{' '}
                </Typography>
              </ListItem>
            ))}
          </List>
        </Popover>
      </Box>
      <Typography variant="body2" component="p" color="secondary">
        Welcome, {user.name}!
      </Typography>
      <LogOutButton />
    </Box>
  );
};
