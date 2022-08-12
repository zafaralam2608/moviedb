import React from 'react';
import { ThemeProvider } from '@mui/material';
import { lightTheme } from './main/constant/theme';

function Bottom() {
  return (
    <ThemeProvider theme={lightTheme}>
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
    </ThemeProvider>
  );
}

export default Bottom;
