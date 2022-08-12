import React from 'react';
import { Grid } from '@mui/material';
import MediaBox from './MediaBox';
import DetailsLeft from './DetailsLeft';
import DetailsRight from './DetailsRight';

function Summary() {
  return (
    <Grid container>
      <MediaBox />
      <Grid container sx={{ justifyContent: 'space-between', padding: '0 24px 8px 24px' }}>
        <DetailsLeft />
        <DetailsRight />
      </Grid>
    </Grid>
  );
}

export default Summary;
