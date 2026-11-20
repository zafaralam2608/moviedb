import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { AppBar, Button, Container, Toolbar } from '@mui/material'
import { Menu } from '@mui/icons-material'
import clsx from 'clsx'
import styles from '@/styles/layout/TopBar.module.scss'
import { Logo } from '@/layout/Logo.tsx'

export const TopBar = (): React.JSX.Element => {
  const { t } = useTranslation()
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false)

  return (
    <AppBar position="sticky" data-mui-color-scheme="dark">
      <Container maxWidth="xl">
        <Toolbar disableGutters className={clsx(styles['toolbar'])}>
          <Logo />
          <Button
            className={clsx(styles['toolbar'])}
            color="inherit"
            startIcon={<Menu />}
            onClick={() => {
              setDrawerOpen(true)
            }}
          >
            {t('nav.menu')}
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
