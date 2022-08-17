import React from 'react';
import {
  Chip, Divider, Grid, Stack, Typography,
} from '@mui/material';
import profile from '../../../../constant/profile';

function SummaryLeft() {
  return (
    <Grid container direction="column" sx={{ width: '727px', justifyContent: 'left' }}>
      <Grid container direction="column" sx={{ padding: '16px 0' }}>
        <Stack direction="row" spacing={1} sx={{ padding: '0 0 8px 0' }}>
          {profile.genres.map((item) => (
            <Chip label={item.name} />
          ))}
        </Stack>
        <Typography paragraph variant="body1">{profile.overview}</Typography>
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

export default SummaryLeft;
