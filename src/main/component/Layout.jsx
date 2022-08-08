import React from 'react';
import { HashRouter } from 'react-router-dom';
import { Box, CssBaseline } from '@mui/material';
import Content from './Content';
import Header from './Header';

function Layout() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <HashRouter>
        <Header />
        <Content />
      </HashRouter>
    </Box>
  );
}

export default Layout;
