import React from 'react';
import {
  Accordion, AccordionSummary, Avatar, Box, ButtonGroup, CardActionArea, CardHeader, Chip, Divider,
  Grid, Stack, Typography,
} from '@mui/material';
import { ExpandMore, PermMedia, Subscriptions } from '@mui/icons-material';
import profile from '../constant/profile';
import { IMAGE_URL } from '../constant/data';

function Profile() {
  const source = profile.poster_path;
  const vid = profile.backdrop_path;
  return (
    <Box>
      <Grid container sx={{ justifyContent: 'center' }}>
        <Grid container sx={{ height: '420px', width: '1280px', justifyContent: 'center' }}>
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
        <Grid container sx={{ height: '382.21px', width: '1280px', justifyContent: 'space-between' }}>
          <Grid container direction="column" sx={{ height: '374.21px', width: '726.88px', justifyContent: 'left' }}>
            <Stack direction="row" spacing={1} sx={{ margin: '10px' }}>
              {profile.genres.map((item) => (
                <Chip label={item.name} />
              ))}
            </Stack>
            <Typography paragraph variant="body1" sx={{ margin: '10px' }}>{profile.overview}</Typography>
            <Divider />
            <Typography variant="body1" sx={{ margin: '10px' }}>Director</Typography>
            <Divider />
            <Typography variant="body1" sx={{ margin: '10px' }}>Writers</Typography>
            <Divider />
            <Typography variant="body1" sx={{ margin: '10px' }}>Stars</Typography>
          </Grid>
          <Grid container direction="column" sx={{ height: '374.21px', width: '425px', justifyContent: 'right' }}>
            <Accordion>
              <AccordionSummary>See Showtimes</AccordionSummary>
            </Accordion>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMore />}>+ Add to Watchlist</AccordionSummary>
            </Accordion>
            <Stack direction="row" spacing={1}>
              <a href="#/" style={{ textDecoration: 'none' }}>User reviews</a>
              <a href="#/" style={{ textDecoration: 'none' }}>Critic reviews</a>
              <a href="#/" style={{ textDecoration: 'none' }}>Metascore</a>
            </Stack>
          </Grid>
        </Grid>
      </Grid>
      <Grid container sx={{ width: '1280px', justifyContent: 'center' }}>
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
        <Grid container sx={{ width: '419px', justifyContent: 'right' }}>
          TODO
        </Grid>
      </Grid>
    </Box>
  );
}

export default Profile;
