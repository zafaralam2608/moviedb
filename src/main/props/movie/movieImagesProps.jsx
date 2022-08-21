import PropTypes from 'prop-types';

const imageInitial = {
  aspect_ratio: 0.0,
  height: 0,
  iso_639_1: '',
  file_path: '',
  vote_average: 0.00,
  vote_count: 0,
  width: 0,
};

export const MovieImagesInitial = {
  backdrops: [imageInitial],
  id: 0,
  logos: [imageInitial],
  posters: [imageInitial],
};

const imageProps = PropTypes.shape({
  aspect_ratio: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  iso_639_1: PropTypes.string.isRequired,
  file_path: PropTypes.string.isRequired,
  vote_average: PropTypes.number.isRequired,
  vote_count: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
});

export const MovieImagesProps = PropTypes.shape({
  backdrops: PropTypes.arrayOf(imageProps).isRequired,
  id: PropTypes.number.isRequired,
  logos: PropTypes.arrayOf(imageProps).isRequired,
  posters: PropTypes.arrayOf(imageProps).isRequired,
});
