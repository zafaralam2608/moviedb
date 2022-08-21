import { configureStore } from '@reduxjs/toolkit';
import albumReducer from '../slice/albumSlice';
import popularReducer from '../slice/popularSlice';
import movieDetailsReducer from '../slice/movie/movieDetailsSlice';
import movieImagesReducer from '../slice/movie/movieImagesSlice';

const store = configureStore({
  reducer: {
    album: albumReducer,
    popular: popularReducer,
    movieDetails: movieDetailsReducer,
    movieImages: movieImagesReducer,
  },
});

export default store;
