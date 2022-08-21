import React from 'react';
import { Grid } from '@mui/material';
import MediaBox from './MediaBox';
import SummaryLeft from './SummaryLeft';
import SummaryRight from './SummaryRight';
import { MovieDetailsProps } from '../../../../props/movie/movieDetailsProps';
import { MovieCreditsProps } from '../../../../props/movie/movieCreditsProps';

function Summary({ movieDetailsData, movieCreditsData }) {
  return (
    <Grid container>
      <MediaBox movieDetailsData={movieDetailsData} />
      <Grid container sx={{ justifyContent: 'space-between', padding: '0 24px 8px 24px' }}>
        <SummaryLeft
          movieDetailsData={movieDetailsData}
          movieCreditsData={movieCreditsData}
        />
        <SummaryRight />
      </Grid>
    </Grid>
  );
}

Summary.propTypes = {
  movieDetailsData: MovieDetailsProps.isRequired,
  movieCreditsData: MovieCreditsProps.isRequired,
};

export default Summary;
