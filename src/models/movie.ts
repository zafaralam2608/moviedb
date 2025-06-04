import { Images } from "./image";
import { Videos } from "./video";
import { Credits } from "./credit";

export const Genre = {
  id: 0,
  name: "",
};

export const ProductionCompany = {
  id: 0,
  logo_path: "",
  name: "",
  origin_country: "",
};

export const ProductionCountry = {
  iso_3166_1: "",
  name: "",
};

export const SpokenLanguage = {
  english_name: "",
  iso_639_1: "",
  name: "",
};

export const Collection = {
  id: 0,
  name: "",
  poster_path: "",
  backdrop_path: "",
};

export const MovieDetails = {
  adult: false,
  backdrop_path: "",
  belongs_to_collection: [],
  budget: 0,
  genres: [],
  homepage: "",
  id: 0,
  imdb_id: "",
  origin_country: [],
  original_language: "",
  original_title: "",
  overview: "",
  popularity: 0,
  poster_path: "",
  production_companies: [],
  production_countries: [],
  release_date: "",
  revenue: 0,
  runtime: 0,
  spoken_languages: [],
  status: "",
  tagline: "",
  title: "",
  video: false,
  vote_average: 0,
  vote_count: 0,
};

export const MovieDetailsFull = {
  ...MovieDetails,
  credits: { ...Credits },
  images: { ...Images },
  videos: { ...Videos },
};
