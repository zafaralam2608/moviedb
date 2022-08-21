import React from 'react';
import { Grid } from '@mui/material';
import MediaBox from './MediaBox';
import SummaryLeft from './SummaryLeft';
import SummaryRight from './SummaryRight';
import { MovieDetailsProps } from '../../../../props/movie/movieDetailsProps';

function Summary({ movieDetailsData }) {
  return (
    <Grid container>
      <MediaBox movieDetailsData={movieDetailsData} />
      <Grid container sx={{ justifyContent: 'space-between', padding: '0 24px 8px 24px' }}>
        <SummaryLeft movieDetailsData={movieDetailsData} />
        <SummaryRight />
      </Grid>
    </Grid>
  );
}

Summary.propTypes = {
  movieDetailsData: MovieDetailsProps.isRequired,
};

export default Summary;
