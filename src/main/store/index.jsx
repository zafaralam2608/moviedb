import { configureStore } from '@reduxjs/toolkit';
import albumReducer from '../slice/albumSlice';

const store = configureStore({
  reducer: {
    album: albumReducer,
  },
});

export default store;
