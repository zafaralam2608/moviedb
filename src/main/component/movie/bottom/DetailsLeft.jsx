import React from 'react';
import {
  Avatar, CardActionArea, CardHeader, Divider, Grid, Typography,
} from '@mui/material';

function DetailsLeft() {
  return (
    <Grid container sx={{ width: '861px', justifyContent: 'left' }}>
      <CardActionArea sx={{ textAlign: 'left' }} href="#/">
        <Typography paragraph variant="h4">Videos</Typography>
      </CardActionArea>
      <Grid item sx={{ height: '282px' }}>TODO Vid</Grid>
      <CardActionArea sx={{ textAlign: 'left' }} href="#/">
        <Typography paragraph variant="h4">Photos</Typography>
      </CardActionArea>
      <Grid item sx={{ height: '282px' }}>TODO Pic</Grid>
      <CardActionArea sx={{ textAlign: 'left' }} href="#/">
        <Typography paragraph variant="h4">Top cast</Typography>
      </CardActionArea>
      <Grid item>
        <CardHeader
          avatar={<Avatar>T</Avatar>}
          title="Actor"
          subheader="Character"
        />
        <CardHeader
          avatar={<Avatar>T</Avatar>}
          title="Actor"
          subheader="Character"
        />
        <CardHeader
          avatar={<Avatar>T</Avatar>}
          title="Actor"
          subheader="Character"
        />
        <CardHeader
          avatar={<Avatar>T</Avatar>}
          title="Actor"
          subheader="Character"
        />
      </Grid>
      <Divider />
      <Typography variant="body1" sx={{ margin: '10px' }}>Director</Typography>
      <Divider />
      <Typography variant="body1" sx={{ margin: '10px' }}>Writers</Typography>
      <Divider />
      <Typography variant="body1" sx={{ margin: '10px' }}>All cast & crew</Typography>
      <Divider />
    </Grid>
  );
}

export default DetailsLeft;
