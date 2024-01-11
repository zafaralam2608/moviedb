import React from 'react';
import { Grid } from '@mui/material';
import ActionBar from './ActionBar';
import TitleBar from './TitleBar';
import Summary from './summary';

function Top() {
  return (
    <Grid container justifyContent="center">
      <Grid container direction="column" width="1280px">
        <ActionBar />
        <TitleBar />
        <Summary />
      </Grid>
    </Grid>
  );
}

export default Top;
