import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid } from '@mui/material';
import Top from './top';
import Bottom from './bottom';
import { selectMovieDetails, retrieveMovieDetails } from '../../slice/movie/movieDetailsSlice';
import { selectMovieCredits, retrieveMovieCredits } from '../../slice/movie/movieCreditsSlice';
import { selectMovieImages, retrieveMovieImages } from '../../slice/movie/movieImagesSlice';
import { selectMovieVideos, retrieveMovieVideos } from '../../slice/movie/movieVideosSlice';

function Movie() {
  const dispatch = useDispatch();
  const { movieDetails } = useSelector(selectMovieDetails);
  const { movieCredits } = useSelector(selectMovieCredits);
  const { movieImages } = useSelector(selectMovieImages);
  const { movieVideos } = useSelector(selectMovieVideos);

  const { movieDetailsLoading, movieDetailsError, movieDetailsData } = movieDetails;
  const { movieCreditsLoading, movieCreditsError, movieCreditsData } = movieCredits;
  const { movieImagesLoading, movieImagesError, movieImagesData } = movieImages;
  const { movieVideosLoading, movieVideosError, movieVideosData } = movieVideos;

  useEffect(() => {
    if (!movieDetailsLoading && !movieDetailsError && !movieDetailsData) {
      dispatch(retrieveMovieDetails());
    }
    if (!movieCreditsLoading && !movieCreditsError && !movieCreditsData) {
      dispatch(retrieveMovieCredits());
    }
    if (!movieImagesLoading && !movieImagesError && !movieImagesData) {
      dispatch(retrieveMovieImages());
    }
    if (!movieVideosLoading && !movieVideosError && !movieVideosData) {
      dispatch(retrieveMovieVideos());
    }
  }, [dispatch]);

  if (!movieDetailsData || !movieCreditsData || !movieImagesData || !movieVideosData) {
    return (<div>fetching---</div>);
  }

  if (movieDetailsLoading || movieCreditsLoading || movieImagesLoading || movieVideosLoading) {
    return (<div>wait...</div>);
  }

  if (movieDetailsError || movieCreditsError || movieImagesError || movieVideosError) {
    return (<div>error!!!</div>);
  }

  return (
    <Grid container>
      <Top
        movieDetailsData={movieDetailsData}
        movieCreditsData={movieCreditsData}
        movieImagesData={movieImagesData}
        movieVideosData={movieVideosData}
      />
      <Bottom movieImagesData={movieImagesData} />
    </Grid>
  );
}

export default Movie;
