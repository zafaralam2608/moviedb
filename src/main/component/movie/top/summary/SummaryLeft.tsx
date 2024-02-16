import React from 'react'
import {
  Chip, Divider, Stack, Typography
} from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import { useAppSelector } from '../../../../../hook'
import { type Genre } from '../../../../interfaces/movie'

const SummaryLeft: React.FC = () => {
  const { data } = useAppSelector(state => state.movie)
  const { credits, genres, overview } = data
  const { cast, crew } = credits

  const actorNames = cast.filter((person) => person.known_for_department === 'Acting')
    .slice(0, 3)
    .map((actor) => actor.name)
    .join('  -  ')

  const directorNames = crew.filter((person) => person.known_for_department === 'Directing')
    .filter((person) => person.department === 'Directing')
    .filter((director) => director.job === 'Director')
    .slice(0, 3)
    .map((director) => director.name)
    .join('  -  ')

  const writerNames = crew.filter((person) => person.known_for_department === 'Writing')
    .filter((writer) => writer.department === 'Writing')
    .slice(0, 3)
    .map((writer) => writer.name)
    .join('  -  ')

  return (
    <Grid container direction="column" sx={{ width: '727px', justifyContent: 'left' }}>
      <Grid container direction="column" sx={{ padding: '16px 0' }}>
        <Stack direction="row" spacing={1} sx={{ paddingBottom: '8px' }}>
          {genres.map((item: Genre) => (
            <Chip key={`chip-${item.name}`} label={item.name} />
          ))}
        </Stack>
        <Typography paragraph variant="body1">{overview}</Typography>
      </Grid>
      <Grid container direction="column">
        <Divider />
        <Typography variant="body1" sx={{ margin: '10px' }}><b>Directors    {directorNames}</b></Typography>
        <Divider />
        <Typography variant="body1" sx={{ margin: '10px' }}><b>Writers    {writerNames}</b></Typography>
        <Divider />
        <Typography variant="body1" sx={{ margin: '10px' }}><b>Stars    {actorNames}</b></Typography>
        <Divider />
      </Grid>
    </Grid>
  )
}

export default SummaryLeft
