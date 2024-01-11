import { createAsyncThunk, createSelector, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { movieVideos } from '../../constant/api';

export const retrieveMovieVideos = createAsyncThunk('movieVideos/retrieve', async (id, thunkApi) => {
  try {
    const response = await axios.get(movieVideos(id));
    return await response.data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.response.data);
  }
});

const initialState = {
  movieVideosLoaded: null,
  movieVideosError: null,
  movieVideosData: null,
};

const movieVideosSlice = createSlice({
  name: 'movieVideos',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(retrieveMovieVideos.pending, (state) => {
      state.movieVideosLoaded = false;
    });
    builder.addCase(retrieveMovieVideos.rejected, (state) => {
      state.movieVideosLoaded = true;
      state.movieVideosError = 'Error retreiving movie videos';
    });
    builder.addCase(retrieveMovieVideos.fulfilled, (state, data) => {
      state.movieVideosLoaded = true;
      state.movieVideosData = data.payload;
    });
  },
});

export const selectMovieVideos = createSelector((state) => ({
  movieVideos: state.movieVideos,
}), (state) => state);

export default movieVideosSlice.reducer;
