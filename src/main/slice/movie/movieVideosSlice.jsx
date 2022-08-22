import { createAsyncThunk, createSelector, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_MOVIE_VIDEOS_TEMP } from '../../constant/api';

export const retrieveMovieVideos = createAsyncThunk('movieVideos/retrieve', async (_, thunkApi) => {
  try {
    const response = await axios.get(API_MOVIE_VIDEOS_TEMP);
    return await response.data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.response.data);
  }
});

const initialState = {
  movieVideosLoading: null,
  movieVideosError: null,
  movieVideosData: null,
};

const movieVideosSlice = createSlice({
  name: 'movieVideos',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(retrieveMovieVideos.pending, (state) => {
      state.movieVideosLoading = true;
    });
    builder.addCase(retrieveMovieVideos.rejected, (state, data) => {
      state.movieVideosLoading = false;
      state.movieVideosError = data.payload.status_message;
    });
    builder.addCase(retrieveMovieVideos.fulfilled, (state, data) => {
      state.movieVideosLoading = false;
      state.movieVideosData = data.payload;
    });
  },
});

export const selectMovieVideos = createSelector((state) => ({
  movieVideos: state.movieVideos,
}), (state) => state);

export default movieVideosSlice.reducer;
