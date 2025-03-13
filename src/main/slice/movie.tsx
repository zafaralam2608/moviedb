import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { type AxiosError } from 'axios'
import config from '../../config'
import { type MovieDetailsFull } from '../interfaces/movie'
import { movieDetailsFull } from '../constant/data'

export const retrieveMovieDetails = createAsyncThunk('movieDetails/retrieve', async (id: number, thunkApi) => {
  try {
    const response = await config.get(`/movie/${id}?append_to_response=credits,images,videos`)
    return response.data
  } catch (e) {
    const error = e as AxiosError
    return thunkApi.rejectWithValue(error.response?.data)
  }
})

interface MovieDetailsState {
  loaded: boolean
  error: string
  data: MovieDetailsFull
}

const initialState: MovieDetailsState = {
  loaded: false,
  error: '',
  data: movieDetailsFull
}

const movieDetailsSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(retrieveMovieDetails.pending, (state) => {
      state.loaded = false
    })
    builder.addCase(retrieveMovieDetails.rejected, (state) => {
      state.loaded = true
      state.error = 'Error retrieving movie details'
    })
    builder.addCase(retrieveMovieDetails.fulfilled, (state, action) => {
      state.loaded = true
      state.data = action.payload
    })
  }
})

export default movieDetailsSlice.reducer
