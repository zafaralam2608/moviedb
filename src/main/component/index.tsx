import { CssBaseline, ThemeProvider, Toolbar } from '@mui/material'
import React from 'react'
import { darkTheme } from '../constant/theme'
import Header from './header'

const App: React.FC = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Header />
      <Toolbar />
      <div>Hello Zed</div>
    </ThemeProvider>
  )
}

export default App
