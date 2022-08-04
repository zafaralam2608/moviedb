const KEY = '67b711ffb45eec9a16f207b155e465ef';

const API_ROOT = 'https://api.themoviedb.org/3';

export const API_MOVIE = `${API_ROOT}/movie`;

export const API_MOVIE_POPULAR = `${API_MOVIE}/popular`;

export const buildApi = ((path) => (
  `${API_ROOT}/${path}/?api_key=${KEY}`
));
