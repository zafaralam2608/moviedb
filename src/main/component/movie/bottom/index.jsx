import React from 'react';
import { Grid, Paper, ThemeProvider } from '@mui/material';
import DetailsLeft from './DetailsLeft';
import DetailsRight from './DetailsRight';
import { lightTheme } from '../../../constant/theme';

function Bottom() {
  return (
    <ThemeProvider theme={lightTheme}>
      <Paper square elavation={0} sx={{ width: '100%' }}>
        <Grid container justifyContent="center">
          <Grid container sx={{ width: '1280px', justifyContent: 'center' }}>
            <DetailsLeft />
            <DetailsRight />
          </Grid>
        </Grid>
      </Paper>
    </ThemeProvider>
  );
}

export default Bottom;
