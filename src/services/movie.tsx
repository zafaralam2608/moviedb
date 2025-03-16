import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API, API_KEY, BASE_URL } from "api";
import type { MovieDetailsFull } from "interfaces/movie";

export const movieApi = createApi({
  reducerPath: "movieApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (build) => ({
    fetchMovie: build.query<MovieDetailsFull, string>({
      query: (id) => ({
        url: `/movie/${id}`,
        params: {
          append_to_response: "credits,images,videos",
          [API]: API_KEY,
        },
      }),
    }),
  }),
});

export const { useFetchMovieQuery } = movieApi;
