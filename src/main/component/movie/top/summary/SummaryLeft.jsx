import React from 'react';
import {
  Chip, Divider, Grid, Stack, Typography,
} from '@mui/material';
import { MovieDetailsProps } from '../../../../props/movie/movieDetailsProps';

function SummaryLeft({ movieDetailsData }) {
  return (
    <Grid container direction="column" sx={{ width: '727px', justifyContent: 'left' }}>
      <Grid container direction="column" sx={{ padding: '16px 0' }}>
        <Stack direction="row" spacing={1} sx={{ paddingBottom: '8px' }}>
          {movieDetailsData.genres.map((item) => (
            <Chip key={`chip-${item.name}`} label={item.name} />
          ))}
        </Stack>
        <Typography paragraph variant="body1">{movieDetailsData.overview}</Typography>
      </Grid>
      <Grid container direction="column">
        <Divider />
        <Typography variant="body1" sx={{ margin: '10px' }}><b>Director</b></Typography>
        <Divider />
        <Typography variant="body1" sx={{ margin: '10px' }}><b>Writers</b></Typography>
        <Divider />
        <Typography variant="body1" sx={{ margin: '10px' }}><b>Stars</b></Typography>
        <Divider />
      </Grid>
    </Grid>
  );
}

SummaryLeft.propTypes = {
  movieDetailsData: MovieDetailsProps.isRequired,
};

export default SummaryLeft;
