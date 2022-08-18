import { configureStore } from '@reduxjs/toolkit';
import albumReducer from '../slice/albumSlice';
import popularReducer from '../slice/popularSlice';
import movieDetailsReducer from '../slice/movie/movieDetailsSlice';

const store = configureStore({
  reducer: {
    album: albumReducer,
    popular: popularReducer,
    movieDetails: movieDetailsReducer,
  },
});

export default store;
