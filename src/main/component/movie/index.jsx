import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid } from '@mui/material';
import Top from './top';
import Bottom from './bottom';
import { selectMovieDetails, retrieveMovieDetails } from '../../slice/movie/movieDetailsSlice';
import { selectMovieImages, retrieveMovieImages } from '../../slice/movie/movieImagesSlice';

function Movie() {
  const dispatch = useDispatch();
  const { movieDetails } = useSelector(selectMovieDetails);
  const { movieImages } = useSelector(selectMovieImages);
  const { movieDetailsLoading, movieDetailsError, movieDetailsData } = movieDetails;
  const { movieImagesLoading, movieImagesError, movieImagesData } = movieImages;

  useEffect(() => {
    dispatch(retrieveMovieDetails());
    dispatch(retrieveMovieImages());
  }, [dispatch]);

  if (movieDetailsLoading || movieImagesLoading) {
    return (<div>wait...</div>);
  }

  if (movieDetailsError || movieImagesError) {
    return (<div>error!!!</div>);
  }
  return (
    <Grid container>
      <Top movieDetailsData={movieDetailsData} />
      <Bottom movieImagesData={movieImagesData} />
    </Grid>
  );
}

export default Movie;
