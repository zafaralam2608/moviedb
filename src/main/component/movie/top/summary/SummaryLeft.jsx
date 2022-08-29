import React from 'react';
import { useSelector } from 'react-redux';
import {
  Chip, Divider, Grid, Skeleton, Stack, Typography,
} from '@mui/material';
import { selectMovieDetails } from '../../../../slice/movie/movieDetailsSlice';
import { selectMovieCredits } from '../../../../slice/movie/movieCreditsSlice';

function Fallback(still) { return (<Skeleton variant="rectangular" animation={!still} width="100%" height="100%" />); }

function SummaryLeft() {
  const { movieDetails } = useSelector(selectMovieDetails);
  const { movieCredits } = useSelector(selectMovieCredits);

  const { movieDetailsLoaded, movieDetailsError, movieDetailsData } = movieDetails;
  const { movieCreditsLoaded, movieCreditsError, movieCreditsData } = movieCredits;

  if (!movieDetailsLoaded || !movieCreditsLoaded) {
    return (<Fallback />);
  }

  if (movieDetailsError || movieCreditsError) {
    return (<Fallback still />);
  }

  if (movieDetailsData && movieCreditsData) {
    const acting = movieCreditsData.cast.filter((person) => person.known_for_department === 'Acting').map((actor) => actor.name).slice(0, 3);
    const stars = `Stars    ${acting.join('  -  ')}`;

    const directing = movieCreditsData.crew.filter((person) => person.department === 'Directing').filter((director) => director.job === 'Director')[0];
    const director = `Director  ${directing.name}`;

    const writing = movieCreditsData.crew.filter((person) => person.department === 'Writing');
    const wri = writing.filter((writer) => writer.job === 'Writer');
    const char = writing.filter((writer) => writer.job === 'Characters');
    const writers = `Writers    ${wri[0].name}  -  ${wri[1].name}  -  ${char[0].name}`;

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
          <Typography variant="body1" sx={{ margin: '10px' }}><b>{director}</b></Typography>
          <Divider />
          <Typography variant="body1" sx={{ margin: '10px' }}><b>{writers}</b></Typography>
          <Divider />
          <Typography variant="body1" sx={{ margin: '10px' }}><b>{stars}</b></Typography>
          <Divider />
        </Grid>
      </Grid>
    );
  }
}

export default SummaryLeft;
