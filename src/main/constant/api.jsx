const KEY = '67b711ffb45eec9a16f207b155e465ef';

const buildApi = ((url) => (
  `${url}?api_key=${KEY}`
));

const URL_ROOT = 'https://api.themoviedb.org/3';

const IMAGE_URL_ROOT = 'https://image.tmdb.org/t/p';
export const IMAGE_URL_W185 = `${IMAGE_URL_ROOT}/w185`;
export const IMAGE_URL_W500 = `${IMAGE_URL_ROOT}/w500`;
export const IMAGE_URL_ORIGINAL = `${IMAGE_URL_ROOT}/original`;

const URL_MOVIE = `${URL_ROOT}/movie`;
const URL_MOVIE_LATEST = `${URL_MOVIE}/latest`;
const URL_MOVIE_POPULAR = `${URL_MOVIE}/popular`;
const URL_MOVIE_TOP = `${URL_MOVIE}/top_rated`;
const URL_MOVIE_UPCOMING = `${URL_MOVIE}/upcoming`;

export const API_MOVIE_TEMP = buildApi(`${URL_MOVIE}`);
export const API_MOVIE_IMAGES_TEMP = buildApi(`${URL_MOVIE}/images`);
export const API_MOVIE_VIDEOS_TEMP = buildApi(`${URL_MOVIE}/videos`);
export const API_MOVIE_CREDITS_TEMP = buildApi(`${URL_MOVIE}/credits`);
export const API_MOVIE_REVIEWS_TEMP = buildApi(`${URL_MOVIE}/reviews`);
export const API_MOVIE_SIMILAR_TEMP = buildApi(`${URL_MOVIE}/similar`);

export const API_MOVIE_LATEST = buildApi(URL_MOVIE_LATEST);
export const API_MOVIE_POPULAR = buildApi(URL_MOVIE_POPULAR);
export const API_MOVIE_TOP = buildApi(URL_MOVIE_TOP);
export const API_MOVIE_UPCOMING = buildApi(URL_MOVIE_UPCOMING);

export const movieDetails = (id) => buildApi(`${URL_MOVIE}/${id}`);
export const movieImages = (id) => buildApi(`${URL_MOVIE}/${id}/images`);
export const movieReviews = (id) => buildApi(`${URL_MOVIE}/${id}/reviews`);
export const movieCredits = (id) => buildApi(`${URL_MOVIE}/${id}/credits`);
export const movieLinks = (id) => buildApi(`${URL_MOVIE}/${id}/external_ids`);
export const movieKeywords = (id) => buildApi(`${URL_MOVIE}/${id}/keywords`);
export const movieSimilar = (id) => buildApi(`${URL_MOVIE}/${id}/similar`);
export const movieVideos = (id) => buildApi(`${URL_MOVIE}/${id}/videos`);
