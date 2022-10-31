import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  
  Collapse,
} from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import HailIcon from '@mui/icons-material/Hail';

export default function NavList() {
  const [selectedIndex, setSelectedIndex] = useState(1);
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleListItemClick = (_, index) => {
    setSelectedIndex(index);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <List
        component="nav"
        aria-label="main mailbox folders"
        sx={{
          color: 'text.primary',

            '&& .Mui-selected, && .Mui-selected:hover': {
                backgroundColor: 'rgb(230, 81, 0)',
                color: 'text.primary',
                '&, & .MuiListItemIcon-root': {
                    color: 'text.primary',
                }
            },
          '& .MuiListItemButton-root:hover': {
            color: 'rgb(230, 81, 0)',
            '&, & .MuiListItemIcon-root': {
              color: 'rgb(230, 81, 0)',
            },
          },
        }}
      >
        <ListItemButton
          component={RouterLink}
          to="/contacts"
          selected={selectedIndex === 0}
          onClick={event => handleListItemClick(event, 0)}
        >
          <ListItemIcon sx={{ color: 'text.primary' }}>
            <PermContactCalendarIcon />
          </ListItemIcon>
          <ListItemText primary="All Contacts" />
        </ListItemButton>
        <ListItemButton
          component={RouterLink}
          to="favorites"
          selected={selectedIndex === 1}
          onClick={event => handleListItemClick(event, 1)}
        >
          <ListItemIcon sx={{ color: 'text.primary' }}>
            <StarBorder />
          </ListItemIcon>
          <ListItemText primary="Favorites" />
        </ListItemButton>

        <ListItemButton
          selected={selectedIndex === 2}
          onClick={(event => handleListItemClick(event, 2), handleClick)}
        >
          <ListItemText primary="Groups" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>

        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton
              component={RouterLink}
              to="coworkers"
              sx={{ pl: 4 }}
              selected={selectedIndex === 3}
              onClick={event => handleListItemClick(event, 3)}
            >
              <ListItemIcon sx={{ color: 'text.primary' }}>
                <PeopleAltIcon />
              </ListItemIcon>
              <ListItemText primary="Co-workers" />
            </ListItemButton>

            <ListItemButton
              component={RouterLink}
              to="family"
              sx={{ pl: 4 }}
              selected={selectedIndex === 4}
              onClick={event => handleListItemClick(event, 4)}
            >
              <ListItemIcon sx={{ color: 'text.primary' }}>
                <FamilyRestroomIcon />
              </ListItemIcon>
              <ListItemText primary="Family" />
            </ListItemButton>

            <ListItemButton
              component={RouterLink}
              to="friends"
              sx={{ pl: 4 }}
              selected={selectedIndex === 5}
              onClick={event => handleListItemClick(event, 5)}
            >
              <ListItemIcon sx={{ color: 'text.primary' }}>
                <Diversity3Icon />
              </ListItemIcon>
              <ListItemText primary="Friends" />
            </ListItemButton>

            <ListItemButton
              component={RouterLink}
              to="other"
              sx={{ pl: 4 }}
              selected={selectedIndex === 6}
              onClick={event => handleListItemClick(event, 6)}
            >
              <ListItemIcon sx={{ color: 'text.primary' }}>
                <HailIcon />
              </ListItemIcon>
              <ListItemText primary="Other" />
            </ListItemButton>
          </List>
        </Collapse>
      </List>
    </Box>
  );
}
