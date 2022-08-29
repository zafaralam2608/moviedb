import { createAsyncThunk, createSelector, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { movieImages } from '../../constant/api';

export const retrieveMovieImages = createAsyncThunk('movieImages/retrieve', async (id, thunkApi) => {
  try {
    const response = await axios.get(movieImages(id));
    return await response.data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.response.data);
  }
});

const initialState = {
  movieImagesLoaded: null,
  movieImagesError: null,
  movieImagesData: null,
};

const movieImagesSlice = createSlice({
  name: 'movieImages',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(retrieveMovieImages.pending, (state) => {
      state.movieImagesLoaded = false;
    });
    builder.addCase(retrieveMovieImages.rejected, (state) => {
      state.movieImagesLoaded = true;
      state.movieImagesError = 'Error retreiving movie images';
    });
    builder.addCase(retrieveMovieImages.fulfilled, (state, data) => {
      state.movieImagesLoaded = true;
      state.movieImagesData = data.payload;
    });
  },
});

export const selectMovieImages = createSelector((state) => ({
  movieImages: state.movieImages,
}), (state) => state);

export default movieImagesSlice.reducer;
