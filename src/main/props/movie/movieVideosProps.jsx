import PropTypes from 'prop-types';

const videoInitial = {
  iso_639_1: '',
  iso_3166_1: '',
  name: '',
  key: '',
  site: '',
  size: 0,
  type: '',
  official: false,
  published_at: '',
  id: '',
};

export const MovieVideosInitial = {
  id: 0,
  results: [videoInitial],
};

const videoProps = PropTypes.shape({
  iso_639_1: PropTypes.string.isRequired,
  iso_3166_1: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  key: PropTypes.string.isRequired,
  site: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  official: PropTypes.bool.isRequired,
  published_at: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
});

export const MovieVideosProps = PropTypes.shape({
  id: PropTypes.number.isRequired,
  results: PropTypes.arrayOf(videoProps).isRequired,
});
