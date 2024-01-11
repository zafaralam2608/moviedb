import { createAsyncThunk, createSelector, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { movieDetails } from '../../constant/api';

export const retrieveMovieDetails = createAsyncThunk('movieDetails/retrieve', async (id, thunkApi) => {
  try {
    const response = await axios.get(movieDetails(id));
    return await response.data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.response.data);
  }
});

const initialState = {
  movieDetailsLoaded: null,
  movieDetailsError: null,
  movieDetailsData: null,
};

const movieDetailsSlice = createSlice({
  name: 'movieDetails',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(retrieveMovieDetails.pending, (state) => {
      state.movieDetailsLoaded = false;
    });
    builder.addCase(retrieveMovieDetails.rejected, (state) => {
      state.movieDetailsLoaded = true;
      state.movieDetailsError = 'Error retreiving movie details';
    });
    builder.addCase(retrieveMovieDetails.fulfilled, (state, data) => {
      state.movieDetailsLoaded = true;
      state.movieDetailsData = data.payload;
    });
  },
});

export const selectMovieDetails = createSelector((state) => ({
  movieDetails: state.movieDetails,
}), (state) => state);

export default movieDetailsSlice.reducer;
