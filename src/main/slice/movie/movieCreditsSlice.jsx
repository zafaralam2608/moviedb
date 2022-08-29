import { createAsyncThunk, createSelector, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { movieCredits } from '../../constant/api';

export const retrieveMovieCredits = createAsyncThunk('movieCredits/retrieve', async (id, thunkApi) => {
  try {
    const response = await axios.get(movieCredits(id));
    return await response.data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.response.data);
  }
});

const initialState = {
  movieCreditsLoaded: null,
  movieCreditsError: null,
  movieCreditsData: null,
};

const movieCreditsSlice = createSlice({
  name: 'movieCredits',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(retrieveMovieCredits.pending, (state) => {
      state.movieCreditsLoaded = false;
    });
    builder.addCase(retrieveMovieCredits.rejected, (state) => {
      state.movieCreditsLoaded = true;
      state.movieCreditsError = 'Error retreiving movie credits';
    });
    builder.addCase(retrieveMovieCredits.fulfilled, (state, data) => {
      state.movieCreditsLoaded = true;
      state.movieCreditsData = data.payload;
    });
  },
});

export const selectMovieCredits = createSelector((state) => ({
  movieCredits: state.movieCredits,
}), (state) => state);

export default movieCreditsSlice.reducer;
