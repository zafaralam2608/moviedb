import {configureStore} from '@reduxjs/toolkit'
import logger from 'redux-logger'
import movieDetailsReducer from './main/slice/movie'
import {searchApi} from "services/search";

const store = configureStore({
  reducer: {
    movie: movieDetailsReducer,
    [searchApi.reducerPath]: searchApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(logger)
      .concat(searchApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store
