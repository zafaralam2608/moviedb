import PropTypes from 'prop-types';

const personInitial = {
  adult: false,
  gender: 0,
  id: 0,
  known_for_department: '',
  name: '',
  original_name: '',
  popularity: 0.0,
  profile_path: '',
  credit_id: '',
};

const castInitial = {
  personInitial,
  cast_id: 0,
  character: '',
  order: 0,
};

const crewinitial = {
  personInitial,
  department: '',
  job: '',
};

export const MovieCreditsInitial = {
  id: 0,
  cast: [castInitial],
  crew: [crewinitial],
};

const personProps = {
  adult: PropTypes.bool.isRequired,
  gender: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  known_for_department: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  original_name: PropTypes.string.isRequired,
  popularity: PropTypes.number.isRequired,
  profile_path: PropTypes.string.isRequired,
  credit_id: PropTypes.string.isRequired,
};

const castProps = PropTypes.shape({
  personProps,
  cast_id: PropTypes.number.isRequired,
  character: PropTypes.string.isRequired,
  order: PropTypes.number.isRequired,
});

const crewProps = PropTypes.shape({
  personProps,
  department: PropTypes.string.isRequired,
  job: PropTypes.string.isRequired,
});

export const MovieCreditsProps = PropTypes.shape({
  id: PropTypes.number.isRequired,
  cast: PropTypes.arrayOf(castProps).isRequired,
  crew: PropTypes.arrayOf(crewProps).isRequired,
});
