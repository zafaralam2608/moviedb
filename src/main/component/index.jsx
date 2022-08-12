import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { Box, CssBaseline, Toolbar } from '@mui/material';
import Dashboard from './Dashboard';
import Header from './Header';
import Movie from './movie';

function App() {
  return (
    <Box>
      <CssBaseline />
      <Header />
      <Toolbar />
      <HashRouter>
        <Routes>
          <Route index element={<Movie />} />
          <Route path="#/home" element={<Dashboard />} />
        </Routes>
      </HashRouter>
    </Box>
  );
}

export default App;
