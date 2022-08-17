import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { CssBaseline, ThemeProvider, Toolbar } from '@mui/material';
import Dashboard from './Dashboard';
import Header from './Header';
import Movie from './movie';
import { darkTheme } from '../constant/theme';

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Header />
      <Toolbar />
      <HashRouter>
        <Routes>
          <Route index element={<Movie />} />
          <Route path="#/home" element={<Dashboard />} />
        </Routes>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
