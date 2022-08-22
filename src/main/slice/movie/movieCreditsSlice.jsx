import { createAsyncThunk, createSelector, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_MOVIE_CREDITS_TEMP } from '../../constant/api';

export const retrieveMovieCredits = createAsyncThunk('movieCredits/retrieve', async (_, thunkApi) => {
  try {
    const response = await axios.get(API_MOVIE_CREDITS_TEMP);
    return await response.data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.response.data);
  }
});

const initialState = {
  movieCreditsLoading: null,
  movieCreditsError: null,
  movieCreditsData: null,
};

const movieCreditsSlice = createSlice({
  name: 'movieCredits',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(retrieveMovieCredits.pending, (state) => {
      state.movieCreditsLoading = true;
    });
    builder.addCase(retrieveMovieCredits.rejected, (state, data) => {
      state.movieCreditsLoading = false;
      state.movieCreditsError = data.payload.status_message;
    });
    builder.addCase(retrieveMovieCredits.fulfilled, (state, data) => {
      state.movieCreditsLoading = false;
      state.movieCreditsData = data.payload;
    });
  },
});

export const selectMovieCredits = createSelector((state) => ({
  movieCredits: state.movieCredits,
}), (state) => state);

export default movieCreditsSlice.reducer;
