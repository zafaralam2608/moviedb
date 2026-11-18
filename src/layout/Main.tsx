import React, { useLayoutEffect, useMemo, useState } from 'react'
import { Stack, useColorScheme } from '@mui/material'
import { useMatch } from 'react-router'
import { paths } from '@/app/paths.ts'
import styles from '@styles/layout/Main.module.scss'
import { TopBar } from '@/layout/TopBar.tsx'

export const Main = (): React.JSX.Element => {
  const [header, setHeader] = useState<HTMLElement | null>(null)
  const [top, setTop] = useState<HTMLElement | null>(null)
  const [bottom, setBottom] = useState<HTMLElement | null>(null)
  const slots = useMemo(() => ({ header, top, bottom }), [header, top, bottom])

  const { setMode } = useColorScheme()
  const dark = useMatch(paths.home) !== null
  useLayoutEffect(() => {
    setMode(dark ? 'dark' : 'light')
  }, [dark, setMode])

  return (
    <Stack className={styles['root']}>
      <TopBar />
    </Stack>
  )
}
