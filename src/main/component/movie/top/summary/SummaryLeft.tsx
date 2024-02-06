import React from 'react'
import {
  Chip, Divider, Grid, Stack, Typography
} from '@mui/material'
import { movieDetails } from '../../../../constant/data'

const SummaryLeft: React.FC = () => {
  return (
    <Grid container direction="column" sx={{ width: '727px', justifyContent: 'left' }}>
      <Grid container direction="column" sx={{ padding: '16px 0' }}>
        <Stack direction="row" spacing={1} sx={{ paddingBottom: '8px' }}>
          {movieDetails.genres.map((item) => (
            <Chip key={`chip-${item.name}`} label={item.name} />
          ))}
        </Stack>
        <Typography paragraph variant="body1">{movieDetails.overview}</Typography>
      </Grid>
      <Grid container direction="column">
        <Divider />
        <Typography variant="body1" sx={{ margin: '10px' }}><b>director</b></Typography>
        <Divider />
        <Typography variant="body1" sx={{ margin: '10px' }}><b>writers</b></Typography>
        <Divider />
        <Typography variant="body1" sx={{ margin: '10px' }}><b>stars</b></Typography>
        <Divider />
      </Grid>
    </Grid>
  )
}

export default SummaryLeft
