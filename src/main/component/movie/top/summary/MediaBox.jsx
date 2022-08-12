import React from 'react';
import {
  ButtonGroup, CardActionArea, Grid, Typography,
} from '@mui/material';
import { PermMedia, Subscriptions } from '@mui/icons-material';
import { IMAGE_URL } from '../../../../constant/data';
import profile from '../../../../constant/profile';

function MediaBox() {
  const source = profile.poster_path;
  const vid = profile.backdrop_path;
  return (
    <Grid container sx={{ margin: '0 24px 8px 24px' }}>
      <Grid item>
        <img src={IMAGE_URL + source} alt="poster" width="284.44px" height="420.96px" />
      </Grid>
      <Grid item sx={{ margin: '0 4px' }}>
        <img src={IMAGE_URL + vid} alt="video" width="746.44px" height="419.87px" />
      </Grid>
      <ButtonGroup orientation="vertical" sx={{ width: '193.13px', height: '420.96px', justifyContent: 'space-evenly' }}>
        <CardActionArea sx={{ textAlign: 'center' }} href="#/">
          <Subscriptions sx={{ fontSize: 40 }} />
          <Typography paragraph variant="caption">VIDEOS</Typography>
        </CardActionArea>
        <CardActionArea sx={{ textAlign: 'center' }} href="#/">
          <PermMedia sx={{ fontSize: 40 }} />
          <Typography paragraph variant="caption">PHOTOS</Typography>
        </CardActionArea>
      </ButtonGroup>
    </Grid>
  );
}

export default MediaBox;
