import React from 'react';
import { IconButton, Toolbar, Typography } from '@mui/material';
import { Menu } from '@mui/icons-material';
import AppBar from '@mui/material/AppBar';

function Header() {
  return (
    <AppBar position="absolute">
      <Toolbar sx={{ pr: '24px' }}>
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
