import React from 'react';
import {
  AccordionSummary, Avatar, CardActionArea, CardHeader, Divider, Grid, Typography,
} from '@mui/material';
import { KeyboardArrowRightOutlined } from '@mui/icons-material';

function DetailsLeft() {
  return (
    <Grid container sx={{ width: '861px', justifyContent: 'left' }}>
      <Grid container sx={{ marginBottom: '8px', padding: '24px 0' }}>
        <AccordionSummary
          sx={{ width: '100%', margin: '0 24px', border: '1px' }}
          expandIcon={<KeyboardArrowRightOutlined />}
        >
          Awards 0 nominations
        </AccordionSummary>
      </Grid>
      <Grid container sx={{ marginBottom: '8px', padding: '24px 0' }}>
        <CardActionArea sx={{ textAlign: 'left' }} href="#/">
          <Typography paragraph variant="h4">Videos</Typography>
        </CardActionArea>
        <Grid item sx={{ height: '282px' }}>TODO Vid</Grid>
      </Grid>
      <Grid container sx={{ marginBottom: '8px', padding: '24px 0' }}>
        <CardActionArea sx={{ textAlign: 'left' }} href="#/">
          <Typography paragraph variant="h4">Photos</Typography>
        </CardActionArea>
        <Grid item sx={{ height: '282px' }}>TODO Pic</Grid>
      </Grid>
      <Grid container sx={{ marginBottom: '8px', padding: '24px 0' }}>
        <CardActionArea sx={{ textAlign: 'left' }} href="#/">
          <Typography paragraph variant="h4">Top cast</Typography>
        </CardActionArea>
      </Grid>
      <Grid container direction="column" sx={{ marginBottom: '8px', padding: '24px 0' }}>
        <Grid container>
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
    </Grid>
  );
}

export default DetailsLeft;
