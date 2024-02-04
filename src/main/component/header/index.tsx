import { Menu } from '@mui/icons-material'
import {
  AppBar, Toolbar, Typography
} from '@mui/material'
import React from 'react'
import Search from './search'

const Header: React.FC = () => {
  return (
    <AppBar position="absolute" sx={{ alignItems: 'center' }}>
      <Toolbar sx={{ width: '1280px', padding: 0 }}>
        <Menu sx={{ mr: 1 }} />
        <Typography component="a" variant="h6" href="#" noWrap sx={{ width: '64px', textDecoration: 'none' }}>
          Menu
        </Typography>
        <Search />
      </Toolbar>
    </AppBar>
  )
}

export default Header
