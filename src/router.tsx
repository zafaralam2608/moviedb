import React from 'react'
import Movie from './main/component/movie'
import { createBrowserRouter } from 'react-router-dom'

const routes = [{
  path: '/title', element: <Movie />
}]

const router = createBrowserRouter(routes)

export default router
