import PropTypes from 'prop-types';

export const MovieDetailsInitial = {
  adult: false,
  backdrop_path: '',
  belongs_to_collection: {
    id: 0,
    name: '',
    poster_path: '',
    backdrop_path: '',
  },
  budget: 0,
  genres: [
    {
      id: 0,
      name: '',
    },
  ],
  homepage: '',
  id: 0,
  imdb_id: '',
  original_language: '',
  original_title: '',
  overview: '',
  popularity: 0.0,
  poster_path: '',
  production_companies: [
    {
      id: 0,
      logo_path: '',
      name: '',
      origin_country: '',
    },
  ],
  production_countries: [
    {
      iso_3166_1: '',
      name: '',
    },
  ],
  release_date: '',
  revenue: 0,
  runtime: 0,
  spoken_languages: [
    {
      english_name: '',
      iso_639_1: '',
      name: '',
    },
  ],
  status: '',
  tagline: '',
  title: '',
  video: false,
  vote_average: 0.0,
  vote_count: 0,
};

export const MovieDetailsProps = PropTypes.shape({
  adult: PropTypes.bool.isRequired,
  backdrop_path: PropTypes.string.isRequired,
  belongs_to_collection: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
    backdrop_path: PropTypes.string.isRequired,
  }),
  budget: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ),
  homepage: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  imdb_id: PropTypes.string.isRequired,
  original_language: PropTypes.string.isRequired,
  original_title: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  popularity: PropTypes.number.isRequired,
  poster_path: PropTypes.string.isRequired,
  production_companies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      logo_path: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      origin_country: PropTypes.string.isRequired,
    }),
  ),
  production_countries: PropTypes.arrayOf(PropTypes.shape({
    iso_3166_1: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  })),
  release_date: PropTypes.string.isRequired,
  revenue: PropTypes.number.isRequired,
  runtime: PropTypes.number.isRequired,
  spoken_languages: PropTypes.arrayOf(
    PropTypes.shape({
      english_name: PropTypes.string.isRequired,
      iso_639_1: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ),
  status: PropTypes.string.isRequired,
  tagline: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  video: PropTypes.bool.isRequired,
  vote_average: PropTypes.number.isRequired,
  vote_count: PropTypes.number.isRequired,
});
