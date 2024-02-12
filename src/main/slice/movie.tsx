import { createAsyncThunk, createSelector, createSlice } from '@reduxjs/toolkit'
import { type AxiosError } from 'axios'
import config from '../../config'

export const retrieveMovieDetails = createAsyncThunk('movieDetails/retrieve', async (id: number, thunkApi) => {
  try {
    const response = await config.get(`/movie/${id}?append_to_response=credits,images,videos`)
    return response.data
  } catch (e) {
    const error = e as AxiosError
    return thunkApi.rejectWithValue(error.response?.data)
  }
})

const initialState = {
  loaded: false,
  error: '',
  data: {}
}

const movieDetailsSlice = createSlice({
  name: 'movieDetails',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(retrieveMovieDetails.pending, (state) => {
      state.loaded = false
    })
    builder.addCase(retrieveMovieDetails.rejected, (state) => {
      state.loaded = true
      state.error = 'Error retreiving movie details'
    })
    builder.addCase(retrieveMovieDetails.fulfilled, (state, data) => {
      state.loaded = true
      state.data = data.payload
    })
  }
})

export const selectMovieDetails = createSelector((state) => ({
  movieDetails: state.movieDetails
}), (state) => state)

export default movieDetailsSlice.reducer
