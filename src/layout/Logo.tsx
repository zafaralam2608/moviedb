import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from '@mui/material'
import { Link as RouterLink } from 'react-router'
import { paths } from '@/app/paths.ts'
import clsx from 'clsx'
import styles from '@/styles/layout/Logo.module.scss'

export const Logo = (): React.JSX.Element => {
  const { t } = useTranslation()

  return (
    <Link
      component={RouterLink}
      to={paths.home}
      aria-label={t('nav.home')}
      underline="none"
      className={clsx(styles['logo'])}
    >
      {t('app.name')}
    </Link>
  )
}
