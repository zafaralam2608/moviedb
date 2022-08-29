import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Grid } from '@mui/material';
import Top from './top';
import { selectMovieDetails, retrieveMovieDetails } from '../../slice/movie/movieDetailsSlice';
import { selectMovieCredits, retrieveMovieCredits } from '../../slice/movie/movieCreditsSlice';
import { selectMovieImages, retrieveMovieImages } from '../../slice/movie/movieImagesSlice';
import { selectMovieVideos, retrieveMovieVideos } from '../../slice/movie/movieVideosSlice';

function Movie() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { movieDetails } = useSelector(selectMovieDetails);
  const { movieCredits } = useSelector(selectMovieCredits);
  const { movieImages } = useSelector(selectMovieImages);
  const { movieVideos } = useSelector(selectMovieVideos);

  const { movieDetailsLoaded } = movieDetails;
  const { movieCreditsLoaded } = movieCredits;
  const { movieImagesLoaded } = movieImages;
  const { movieVideosLoaded } = movieVideos;

  useEffect(() => {
    if (movieDetailsLoaded == null) {
      dispatch(retrieveMovieDetails(id));
    }
    if (movieCreditsLoaded == null) {
      dispatch(retrieveMovieCredits(id));
    }
    if (movieImagesLoaded == null) {
      dispatch(retrieveMovieImages(id));
    }
    if (movieVideosLoaded == null) {
      dispatch(retrieveMovieVideos(id));
    }
  }, [dispatch]);

  return (
    <Grid container>
      <Top />
    </Grid>
  );
}

export default Movie;
