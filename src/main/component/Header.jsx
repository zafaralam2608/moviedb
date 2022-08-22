import React from 'react';
import { IconButton, Toolbar, Typography } from '@mui/material';
import { Menu } from '@mui/icons-material';
import AppBar from '@mui/material/AppBar';

function Header() {
  return (
    <AppBar position="absolute" sx={{ alignItems: 'center' }}>
      <Toolbar sx={{ width: '1280px', padding: 0 }}>
        <IconButton
          edge="start"
          color="default"
        >
          <Menu />
        </IconButton>
        <Typography component="h1" variant="h6" noWrap sx={{ flexGrow: 1 }}>
          Menu
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
