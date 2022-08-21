import { createAsyncThunk, createSelector, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_MOVIE_TEMP } from '../../constant/api';

export const retrieveMovieDetails = createAsyncThunk('movieDetails/retrieve', async (_, thunkApi) => {
  try {
    const response = await axios.get(API_MOVIE_TEMP);
    return await response.data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.response.data);
  }
});

const initialState = {
  movieDetailsLoading: null,
  movieDetailsError: null,
  movieDetailsData: null,
};

const movieDetailsSlice = createSlice({
  name: 'movieDetails',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(retrieveMovieDetails.pending, (state) => {
      state.movieDetailsLoading = true;
    });
    builder.addCase(retrieveMovieDetails.rejected, (state, data) => {
      state.movieDetailsLoading = false;
      state.movieDetailsError = data.payload.status_message;
    });
    builder.addCase(retrieveMovieDetails.fulfilled, (state, data) => {
      state.movieDetailsLoading = false;
      state.movieDetailsData = data.payload;
    });
  },
});

export const selectMovieDetails = createSelector((state) => ({
  movieDetails: state.movieDetails,
}), (state) => state);

export default movieDetailsSlice.reducer;
