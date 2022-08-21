import React from 'react';
import {
  ButtonGroup, CardActionArea, CardMedia, Grid, Typography,
} from '@mui/material';
import { PermMedia, Subscriptions } from '@mui/icons-material';
import { MovieDetailsProps } from '../../../../props/movie/movieDetailsProps';
import { IMAGE_URL_W500, IMAGE_URL_ORIGINAL } from '../../../../constant/api';
import { MovieImagesProps } from '../../../../props/movie/movieImagesProps';
import { MovieVideosProps } from '../../../../props/movie/movieVideosProps';

function MediaBox({ movieDetailsData, movieImagesData, movieVideosData }) {
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

MediaBox.propTypes = {
  movieDetailsData: MovieDetailsProps.isRequired,
  movieImagesData: MovieImagesProps.isRequired,
  movieVideosData: MovieVideosProps.isRequired,
};

export default MediaBox;
