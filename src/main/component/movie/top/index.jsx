import React from 'react';
import { Grid } from '@mui/material';
import ActionBar from './ActionBar';
import TitleBar from './TitleBar';
import Summary from './summary';
import { MovieDetailsProps } from '../../../props/movie/movieDetailsProps';
import { MovieCreditsProps } from '../../../props/movie/movieCreditsProps';

function Top({ movieDetailsData, movieCreditsData }) {
  return (
    <Grid container justifyContent="center">
      <Grid container direction="column" width="1280px">
        <ActionBar />
        <TitleBar movieDetailsData={movieDetailsData} />
        <Summary
          movieDetailsData={movieDetailsData}
          movieCreditsData={movieCreditsData}
        />
      </Grid>
    </Grid>
  );
}

Top.propTypes = {
  movieDetailsData: MovieDetailsProps.isRequired,
  movieCreditsData: MovieCreditsProps.isRequired,
};

export default Top;
