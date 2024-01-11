import React from 'react';
import { useSelector } from 'react-redux';
import {
  ButtonGroup, CardActionArea, CardMedia, Grid, Skeleton, Typography,
} from '@mui/material';
import { PermMedia, Subscriptions } from '@mui/icons-material';
import { selectMovieDetails } from '../../../../slice/movie/movieDetailsSlice';
import { selectMovieImages } from '../../../../slice/movie/movieImagesSlice';
import { selectMovieVideos } from '../../../../slice/movie/movieVideosSlice';
import { IMAGE_URL_W500, IMAGE_URL_ORIGINAL } from '../../../../constant/api';

function Fallback(still) { return (<Skeleton variant="rectangular" animation={!still} width="100%" height="100%" />); }

function MediaBox() {
  const { movieDetails } = useSelector(selectMovieDetails);
  const { movieImages } = useSelector(selectMovieImages);
  const { movieVideos } = useSelector(selectMovieVideos);

  const { movieDetailsLoaded, movieDetailsError, movieDetailsData } = movieDetails;
  const { movieImagesLoaded, movieImagesError, movieImagesData } = movieImages;
  const { movieVideosLoaded, movieVideosError, movieVideosData } = movieVideos;

  if (!movieDetailsLoaded || !movieImagesLoaded || !movieVideosLoaded) {
    return (<Fallback />);
  }

  if (movieDetailsError || movieImagesError || movieVideosError) {
    return (<Fallback still />);
  }

  if (movieDetailsData && movieImagesData && movieVideosData) {
    const movieVideosCount = movieVideosData.results.length;
    const movieImagesCount = movieImagesData.backdrops.length
      + movieImagesData.logos.length + movieImagesData.posters.length;
    const videos = `${movieVideosCount < 100 ? movieVideosCount : '99+'}  VIDEOS`;
    const images = `${movieImagesCount < 100 ? movieImagesCount : '99+'}  PHOTOS`;

    return (
      <Grid container sx={{ margin: '0 24px 8px 24px' }}>
        <Grid item>
          <CardMedia component="img" image={IMAGE_URL_W500 + movieDetailsData.poster_path} alt="poster" width="284.44px" height="420.96px" />
        </Grid>
        <Grid item sx={{ margin: '0 4px' }}>
          <CardMedia component="img" image={IMAGE_URL_ORIGINAL + movieDetailsData.backdrop_path} alt="video" width="746.44px" height="419.87px" />
        </Grid>
        <ButtonGroup orientation="vertical" sx={{ width: '193.13px', height: '420.96px', justifyContent: 'space-evenly' }}>
          <CardActionArea sx={{ textAlign: 'center' }} href="#/">
            <Subscriptions sx={{ fontSize: 40 }} />
            <Typography paragraph variant="caption">{videos}</Typography>
          </CardActionArea>
          <CardActionArea sx={{ textAlign: 'center' }} href="#/">
            <PermMedia sx={{ fontSize: 40 }} />
            <Typography paragraph variant="caption">{images}</Typography>
          </CardActionArea>
        </ButtonGroup>
      </Grid>
    );
  }
}

export default MediaBox;
