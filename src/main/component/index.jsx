import React from 'react';
import {
  HashRouter, Navigate, Route, Routes,
} from 'react-router-dom';
import { CssBaseline, ThemeProvider, Toolbar } from '@mui/material';
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
          <Route index element={<Navigate to="title/616037" />} replace />
          <Route path="title/:id" element={<Movie />} />
        </Routes>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
