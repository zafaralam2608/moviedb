import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API, API_KEY, BASE_URL } from "api";
import { ISearchMulti, ISearchMultiResults } from "interfaces/search";

export const searchApi = createApi({
  reducerPath: "searchApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (build) => ({
    searchMovie: build.query<ISearchMultiResults[], string>({
      query: (q) => ({
        url: "/search/movie",
        params: {
          query: q,
          [API]: API_KEY,
        },
      }),
      transformResponse: (response: ISearchMulti) => response.results,
    }),
  }),
});

export const { useSearchMovieQuery } = searchApi;
