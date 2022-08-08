import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Box, Toolbar } from '@mui/material';
import Dashboard from './Dashboard';
import Profile from '../common/Profile';

function Content() {
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1, height: '100vh', overflow: 'auto', width: '100%',
      }}
    >
      <Toolbar />
      <Routes>
        <Route index element={<Profile />} />
        <Route path="#/home" element={<Dashboard />} />
      </Routes>
    </Box>
  );
}

export default Content;
