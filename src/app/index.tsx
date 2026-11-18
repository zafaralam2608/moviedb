import React from 'react'
import { useTranslation } from 'react-i18next'
import { Provider } from 'react-redux'
import { CssBaseline, StyledEngineProvider } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import { RouterProvider } from 'react-router/dom'
import { theme } from '@/styles/theme.ts'
import { paths } from '@/app/paths.ts'
import { store } from '@/app/store.ts'
import { router } from '@/app/router.ts'

const initialMode = window.location.pathname === paths.home ? 'dark' : 'light'

export const App = (): React.JSX.Element => {
  const { i18n } = useTranslation()

  return (
    <Provider store={store}>
      <StyledEngineProvider injectFirst>
        <ThemeProvider
          theme={theme}
          defaultMode={initialMode}
          storageManager={null}
        >
          <CssBaseline />
          <RouterProvider key={i18n.language} router={router} />
        </ThemeProvider>
      </StyledEngineProvider>
    </Provider>
  )
}
