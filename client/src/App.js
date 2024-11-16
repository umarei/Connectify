import React from 'react';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import Navbar from './components/Navbar';
import ContactsPage from './pages/ContactsPage';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#2196f3' },
    secondary: { main: '#f50057' },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Navbar />
      <ContactsPage />
    </ThemeProvider>
  );
};

export default App;
