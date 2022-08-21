import { createAsyncThunk, createSelector, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_MOVIE_IMAGES_TEMP } from '../../constant/api';
import { MovieImagesInitial } from '../../props/movie/movieImagesProps';

export const retrieveMovieImages = createAsyncThunk('movieImages/retrieve', async (_, thunkApi) => {
  try {
    const response = await axios.get(API_MOVIE_IMAGES_TEMP);
    return await response.data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.response.data);
  }
});

const initialState = {
  movieImagesLoading: false,
  movieImagesError: '',
  movieImagesData: MovieImagesInitial,
};

const movieImagesSlice = createSlice({
  name: 'movieImages',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(retrieveMovieImages.pending, (state) => {
      state.movieImagesLoading = true;
    });
    builder.addCase(retrieveMovieImages.rejected, (state, data) => {
      state.movieImagesLoading = false;
      state.movieImagesError = data.payload.status_message;
    });
    builder.addCase(retrieveMovieImages.fulfilled, (state, data) => {
      state.movieImagesLoading = false;
      state.movieImagesData = data.payload;
    });
  },
});

export const selectMovieImages = createSelector((state) => ({
  movieImages: state.movieImages,
}), (state) => state);

export default movieImagesSlice.reducer;
