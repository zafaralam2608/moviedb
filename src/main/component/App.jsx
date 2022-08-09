import React from 'react';
import { Box, CssBaseline } from '@mui/material';
import Content from './Content';
import Header from './Header';

function App() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Header />
      <Content />
    </Box>
  );
}

export default App;
