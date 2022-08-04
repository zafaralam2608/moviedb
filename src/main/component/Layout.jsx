import React, { useState } from 'react';
import { HashRouter } from 'react-router-dom';
import { Box, CssBaseline } from '@mui/material';
import Sidebar from './Sidebar';
import Content from './Content';
import Header from './Header';

function Layout() {
  const [open, setOpen] = useState(false);

  const openDrawer = () => {
    setOpen(true);
  };

  const closeDrawer = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <HashRouter>
        <Header
          openDrawer={openDrawer}
          open={open}
        />
        <Sidebar
          closeDrawer={closeDrawer}
          open={open}
        />
        <Content />
      </HashRouter>
    </Box>
  );
}

export default Layout;
