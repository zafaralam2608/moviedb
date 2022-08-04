import React from 'react';
import { IconButton, Toolbar, Typography } from '@mui/material';
import { Menu } from '@mui/icons-material';
import PropTypes from 'prop-types';
import AppBar from '../common/AppBar';

function Header({ open, openDrawer }) {
  return (
    <AppBar position="absolute" open={open}>
      <Toolbar sx={{ pr: '24px', textAlign: 'center' }}>
        <IconButton
          edge="start"
          color="default"
          aria-label="open drawer"
          sx={{ marginRight: '36px', ...(open && { display: 'none' }) }}
          onClick={() => openDrawer()}
        >
          <Menu />
        </IconButton>
        <Typography component="h1" variant="h6" noWrap sx={{ flexGrow: 1 }}>
          Insert title here
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  open: PropTypes.bool.isRequired,
  openDrawer: PropTypes.func.isRequired,
};

export default Header;
