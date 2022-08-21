import { configureStore } from '@reduxjs/toolkit';
import albumReducer from '../slice/albumSlice';
import popularReducer from '../slice/popularSlice';
import movieDetailsReducer from '../slice/movie/movieDetailsSlice';
import movieCreditsReducer from '../slice/movie/movieCreditsSlice';
import movieImagesReducer from '../slice/movie/movieImagesSlice';
import movieVideosReducer from '../slice/movie/movieVideosSlice';

const store = configureStore({
  reducer: {
    album: albumReducer,
    popular: popularReducer,
    movieDetails: movieDetailsReducer,
    movieCredits: movieCreditsReducer,
    movieImages: movieImagesReducer,
    movieVideos: movieVideosReducer,
  },
});

export default store;
