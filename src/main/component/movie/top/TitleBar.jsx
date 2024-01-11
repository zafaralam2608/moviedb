import React from 'react';
import { useSelector } from 'react-redux';
import { Skeleton, Toolbar } from '@mui/material';
import { selectMovieDetails } from '../../../slice/movie/movieDetailsSlice';

function Fallback(still) { return (<Skeleton variant="rectangular" animation={!still} />); }

function TitleBar() {
  const { movieDetails } = useSelector(selectMovieDetails);
  const { movieDetailsLoaded, movieDetailsError, movieDetailsData } = movieDetails;

  if (!movieDetailsLoaded) {
    return (<Fallback />);
  }

  if (movieDetailsError) {
    return (<Fallback still />);
  }

  return (
    <Toolbar>
      {movieDetailsData.original_title}
    </Toolbar>
  );
}

export default TitleBar;
