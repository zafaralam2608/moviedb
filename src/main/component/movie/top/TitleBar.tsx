import React from 'react'
import { Stack, Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import { Grade, StarBorder } from '@mui/icons-material'
import { movieDetails } from '../../../constant/data'

const TitleBar: React.FC = () => {
  return (
    <Grid container>
      <Grid container direction='column'>
        <Grid>
          <Typography>{movieDetails.original_title}</Typography>
        </Grid>
        <Grid>
          <Stack direction='row' divider={<p> . </p>}>
            <Typography>{movieDetails.release_date.split('-')[0]}</Typography>
            <Typography>{movieDetails.runtime}</Typography>
          </Stack>
        </Grid>
      </Grid>
      <Grid container>
        <Grid container direction='column'>
          <Typography>IMDb Rating</Typography>
          <Grade />
          <Typography>{movieDetails.vote_average} / 10</Typography>
          <Typography>{movieDetails.vote_count}</Typography>
        </Grid>
        <Grid container direction='column'>
          <Typography>YOUR RATING</Typography>
          <StarBorder />
          <Typography>Rate</Typography>
        </Grid>
        <Grid container direction='column'>
          <Typography>POPULARITY</Typography>
          <Typography>{movieDetails.popularity}</Typography>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default TitleBar
