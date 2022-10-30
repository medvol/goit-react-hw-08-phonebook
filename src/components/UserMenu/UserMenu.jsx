import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks/useAuth';
import {
  Box,
  IconButton,
  Typography,
  Tooltip,
  Button,
  Popover,
  List,
  ListItem,
} from '@mui/material';
import UserAvatar from 'components/UserAvatar/UserAvatar';
import LogoutIcon from '@mui/icons-material/Logout';

export const UserMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const dispatch = useDispatch();
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
      <Typography variant="body2" component="p" color="secondary">
        Welcome, {user.name}
      </Typography>
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

      <Button
        variant="outlined"
        color="secondary"
        size="small"
        startIcon={<LogoutIcon />}
        type="button"
        onClick={() => dispatch(logOut())}
      >
        <Typography
          variant="body2"
          component="span"
          sx={{ textTransform: 'none' }}
        >
          Logout
        </Typography>
      </Button>
    </Box>
  );
};

//  <Menu
//    sx={{ mt: '58px', bgcolor: 'background.primary', color: 'secondary' }}
//    id="menu-appbar"
//    anchorEl={anchorElUser}
//    anchorOrigin={{
//      vertical: 'top',
//      horizontal: 'right',
//    }}
//    keepMounted
//    transformOrigin={{
//      vertical: 'top',
//      horizontal: 'right',
//    }}
//    open={Boolean(anchorElUser)}
//    onClose={handleCloseUserMenu}
//  >
//  {settings.map(setting => (
//    <MenuItem key={setting} onClick={handleCloseUserMenu}>
//      <Typography textAlign="center">{setting}</Typography>
//    </MenuItem>
//  ))}
//  </Menu>;
