import React from 'react';
import {
  ButtonGroup, CardActionArea, Container, Grid, Typography,
} from '@mui/material';
import { PermMedia, Subscriptions } from '@mui/icons-material';
import profile from '../constant/profile';
import { IMAGE_URL } from '../constant/data';

function Profile() {
  const source = profile.poster_path;
  const vid = profile.backdrop_path;
  return (
    <Container>
      <Grid container sx={{ height: '420%', width: '1280px', justifyContent: 'center' }}>
        <Grid item>
          <img src={IMAGE_URL + source} alt="poster" width="284.44px" height="420.96px" />
        </Grid>
        <Grid item>
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
    </Container>
  );
}

export default Profile;
