import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material';
import Layout from './Layout';

function App() {
  const theme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Layout />
    </ThemeProvider>
  );
}

export default App;
