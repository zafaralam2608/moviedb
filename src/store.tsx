import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import movieDetailsReducer from './main/slice/movie'

const store = configureStore({
  reducer: {
    movie: movieDetailsReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})

export default store
