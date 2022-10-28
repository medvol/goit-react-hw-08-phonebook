import { useState } from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Link } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';

function LinkTab(props) {
  return <Tab component={Link} {...props} />;
}

export const Navigation = () => {
  const [value, setValue] = useState('/');
  const { isLoggedIn } = useAuth();

  const handleChange = (_, newValue) => {
    console.log(newValue);
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

// export default function NavTabs() {

//   return (

//   );
// }

//  <nav>
//
//     </nav>
