import React from 'react';
import {
  Divider, IconButton, Link, List, ListItem, ListItemIcon, ListItemText, Toolbar,
} from '@mui/material';
import { ChevronLeft, MenuBook } from '@mui/icons-material';
import PropTypes from 'prop-types';
import Drawer from '../common/Drawer';

function Sidebar({ open, closeDrawer }) {
  return (
    <Drawer variant="permanent" open={open}>
      <Toolbar
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          px: [1],
        }}
      >
        <IconButton onClick={() => closeDrawer()}>
          <ChevronLeft />
        </IconButton>
      </Toolbar>
      <Divider />
      <List component="nav">
        <Link href="#/" style={{ textDecoration: 'none' }}>
          <ListItem button>
            <ListItemIcon>
              <MenuBook />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
        </Link>
      </List>
    </Drawer>
  );
}

Sidebar.propTypes = {
  open: PropTypes.bool.isRequired,
  closeDrawer: PropTypes.func.isRequired,
};

export default Sidebar;
