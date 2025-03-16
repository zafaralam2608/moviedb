import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { movieApi } from "services/movie";
import { searchApi } from "services/search";

const store = configureStore({
  reducer: {
    [searchApi.reducerPath]: searchApi.reducer,
    [movieApi.reducerPath]: movieApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(logger)
      .concat(searchApi.middleware)
      .concat(movieApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
