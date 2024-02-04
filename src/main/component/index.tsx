import { CssBaseline, ThemeProvider, Toolbar } from '@mui/material'
import React from 'react'
import { darkTheme } from '../constant/theme'
import Header from './header'
import { RouterProvider } from 'react-router-dom'
import router from '../../router'

const App: React.FC = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Header />
      <Toolbar />
      <RouterProvider router= {router} />
    </ThemeProvider>
  )
}

export default App
