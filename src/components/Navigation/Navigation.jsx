import { useState } from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Link } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';

function LinkTab(props) {
  return (
    <Tab
      component={Link}     
      {...props}
    />
  );
}

export const Navigation = () => {
  const [value, setValue] = useState('/');
  const { isLoggedIn } = useAuth();


  const handleChange = (event, newValue) => {
    console.log(newValue);
    setValue(newValue);
  };

  return (
    <Box component="nav" sx={{ width: '100%' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        selectionFollowsFocus
        aria-label="site navigation"
        sx={{ justifyContent: 'end' }}
      >
        <LinkTab label="Home" value='/' to="/" />
        {isLoggedIn && <LinkTab label="Contacts" value='/contacts' to="/contacts" />}
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