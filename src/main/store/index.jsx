import { configureStore } from '@reduxjs/toolkit';
import albumReducer from '../slice/albumSlice';
import popularReducer from '../slice/popularSlice';

const store = configureStore({
  reducer: {
    album: albumReducer,
    popular: popularReducer,
  },
});

export default store;
