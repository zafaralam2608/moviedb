import React from 'react';
import { Grid } from '@mui/material';
import Top from './top';
import Bottom from './bottom';

function Movie() {
  return (
    <Grid container>
      <Top />
      <Bottom />
    </Grid>
  );
}

export default Movie;
