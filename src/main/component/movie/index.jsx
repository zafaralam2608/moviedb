import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid } from '@mui/material';
import Top from './top';
import Bottom from './bottom';
import { selectMovieDetails, retrieveMovieDetails } from '../../slice/movie/movieDetailsSlice';

function Movie() {
  const { movieDetails } = useSelector(selectMovieDetails);
  const dispatch = useDispatch();
  const { data } = movieDetails;

  useEffect(() => {
    dispatch(retrieveMovieDetails());
  }, [dispatch]);

  return (
    <Grid container>
      <Top movieDetails={data} />
      <Bottom />
    </Grid>
  );
}

export default Movie;
