import { createBrowserRouter } from 'react-router'
import { paths } from '@/app/paths.ts'
import { Main } from '@/layout/Main.tsx'

export const router = createBrowserRouter([
  {
    path: paths.home,
    Component: Main,
  },
])
