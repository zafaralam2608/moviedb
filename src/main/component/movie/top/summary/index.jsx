import React from 'react';
import { Grid } from '@mui/material';
import MediaBox from './MediaBox';
import SummaryLeft from './SummaryLeft';
import SummaryRight from './SummaryRight';

function Summary() {
  return (
    <Grid container>
      <MediaBox />
      <Grid container sx={{ justifyContent: 'space-between', padding: '0 24px 8px 24px' }}>
        <SummaryLeft />
        <SummaryRight />
      </Grid>
    </Grid>
  );
}

export default Summary;
