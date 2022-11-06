import { useState } from 'react';
import { Box, Tabs, Tab } from '@mui/material';
import { Link } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';

function LinkTab(props) {
  return (
    <Tab
      component={Link}
      {...props}
      sx={{
        '&:hover': {
          color: 'secondary.main',
        },
      }}
    />
  );
}

export const Navigation = () => {
  const [value, setValue] = useState('/');
  const { isLoggedIn } = useAuth();

  const handleChange = (_, newValue) => {   
    setValue(newValue);
  };

  return (
    <Box sx={{ ml: 'auto', mr: 18 }}>
      <Tabs
        value={value}
        onChange={handleChange}
        component="nav"
        aria-label="site navigation"
        indicatorColor="secondary"
        textColor="secondary"
      >
        <LinkTab label="Home" value="/" to="/" sx={{ mr: 2 }} />
        {isLoggedIn && (
          <LinkTab label="Contacts" value="/contacts" to="/contacts" />
        )}
      </Tabs>
    </Box>
  );
};
