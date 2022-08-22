import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import albumReducer from '../slice/albumSlice';
import movieCreditsReducer from '../slice/movie/movieCreditsSlice';
import movieDetailsReducer from '../slice/movie/movieDetailsSlice';
import movieImagesReducer from '../slice/movie/movieImagesSlice';
import movieVideosReducer from '../slice/movie/movieVideosSlice';
import popularReducer from '../slice/popularSlice';

const store = configureStore({
  reducer: {
    album: albumReducer,
    popular: popularReducer,
    movieDetails: movieDetailsReducer,
    movieCredits: movieCreditsReducer,
    movieImages: movieImagesReducer,
    movieVideos: movieVideosReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
