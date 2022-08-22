import React from 'react';
import { Grid } from '@mui/material';
import ActionBar from './ActionBar';
import TitleBar from './TitleBar';
import Summary from './summary';
import { MovieDetailsProps } from '../../../props/movie/movieDetailsProps';
import { MovieCreditsProps } from '../../../props/movie/movieCreditsProps';
import { MovieImagesProps } from '../../../props/movie/movieImagesProps';
import { MovieVideosProps } from '../../../props/movie/movieVideosProps';

function Top({
  movieDetailsData, movieCreditsData, movieImagesData, movieVideosData,
}) {
  return (
    <Grid container justifyContent="center">
      <Grid container direction="column" width="1280px">
        <ActionBar />
        <TitleBar movieDetailsData={movieDetailsData} />
        <Summary
          movieDetailsData={movieDetailsData}
          movieCreditsData={movieCreditsData}
          movieImagesData={movieImagesData}
          movieVideosData={movieVideosData}
        />
      </Grid>
    </Grid>
  );
}

Top.propTypes = {
  movieDetailsData: MovieDetailsProps.isRequired,
  movieCreditsData: MovieCreditsProps.isRequired,
  movieImagesData: MovieImagesProps.isRequired,
  movieVideosData: MovieVideosProps.isRequired,
};

export default Top;
