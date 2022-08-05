import { createAsyncThunk, createSelector, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_MOVIE_POPULAR } from '../constant/api';

export const retrieve = createAsyncThunk('popular/retrieve', async (_, thunkApi) => {
  try {
    const response = await axios.get(API_MOVIE_POPULAR);
    return await response.data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.response.data);
  }
});

const initialState = {
  loading: false,
  error: '',
  data: {
    results: [],
    page: 1,
    pages: 0,
    total: 0,
  },
};

const popularSlice = createSlice({
  name: 'popular',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(retrieve.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(retrieve.rejected, (state, data) => {
      state.loading = false;
      state.error = data.payload.status_message;
    });
    builder.addCase(retrieve.fulfilled, (state, data) => {
      state.loading = false;
      state.data = data.payload;
    });
  },
});

export const select = createSelector((state) => ({
  popular: state.popular,
}), (state) => state);

export default popularSlice.reducer;
