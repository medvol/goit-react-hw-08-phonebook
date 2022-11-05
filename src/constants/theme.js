import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#a5a7ac',
      contrastText: '#eeeeef',
    },

    secondary: {
      main: '#f57c00',
    },
    background: {
      primary: '#2d354e',
      secondary: '#1a2138',
    },

    text: {
      primary: '#eeeeef',
      secondary: '#a5a7ac',
    },
    action: {
      active: '#f57c00',
    },
  },
});
