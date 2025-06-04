import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API, API_KEY, BASE_URL } from "api";
import type { IMovieDetailsFull } from "interfaces/movie";

export const movieApi = createApi({
  reducerPath: "movieApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (build) => ({
    fetchMovie: build.query<IMovieDetailsFull, string>({
      query: (id: string) => ({
        url: `/movie/${id}`,
        params: {
          append_to_response: "credits,images,videos",
          language: "en-US",
          include_image_language: "null",
          [API]: API_KEY,
        },
      }),
    }),
  }),
});

export const { useFetchMovieQuery } = movieApi;
