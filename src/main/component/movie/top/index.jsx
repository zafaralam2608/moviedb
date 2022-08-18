import React from 'react';
import { Grid } from '@mui/material';
import ActionBar from './ActionBar';
import TitleBar from './TitleBar';
import Summary from './summary';
import { MovieDetailsProps } from '../../../props/movie/movieDetailsProps';

function Top({ movieDetails }) {
  return (
    <Grid container justifyContent="center">
      <Grid container direction="column" width="1280px">
        <ActionBar />
        <TitleBar originalTitle={movieDetails.original_title} />
        <Summary />
      </Grid>
    </Grid>
  );
}

Top.propTypes = {
  movieDetails: MovieDetailsProps.isRequired,
};

export default Top;
