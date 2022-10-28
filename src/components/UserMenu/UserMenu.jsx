import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks/useAuth';
import {
  Box,
  IconButton,
  Typography,
  Menu,
  Avatar,
  Tooltip,
  MenuItem,
  Button,
} from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';

// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import Menu from '@mui/material/Menu';

// import Avatar from '@mui/material/Avatar';

// import Tooltip from '@mui/material/Tooltip';
// import MenuItem from '@mui/material/MenuItem';

export const UserMenu = () => {
  const [anchorElUser, setAnchorElUser] = useState(null);
  const dispatch = useDispatch();
  const { user } = useAuth();
  const settings = ['Profile', 'Account'];

  const handleOpenUserMenu = event => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

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
          <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
          </IconButton>
        </Tooltip>
        <Menu
          sx={{ mt: '45px' }}
          id="menu-appbar"
          anchorEl={anchorElUser}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={Boolean(anchorElUser)}
          onClose={handleCloseUserMenu}
        >
          {settings.map(setting => (
            <MenuItem key={setting} onClick={handleCloseUserMenu}>
              <Typography textAlign="center">{setting}</Typography>
            </MenuItem>
          ))}
        </Menu>
      </Box>

      <Button
        variant="outlined"
        color="primary"
        size="small"
        startIcon={<LogoutIcon />}
        type="button"
        onClick={() => dispatch(logOut())}
      >
        <Typography variant='body2' component='span'>LogOut</Typography>
      </Button>
    </Box>
  );
};
