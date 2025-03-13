import React from 'react'
import { Stack, Typography } from '@mui/material'
import Grid from '@mui/material/Grid2'
import { Grade, StarBorder } from '@mui/icons-material'
import { useAppSelector } from '../../../../hook'

const TitleBar: React.FC = () => {
  const { data } = useAppSelector(state => state.movie)

  return (
    <Grid container>
      <Grid container direction='column'>
        <Grid>
          <Typography>{data.original_title}</Typography>
        </Grid>
        <Grid>
          <Stack direction='row' divider={<p> . </p>}>
            <Typography>{data.release_date.split('-')[0]}</Typography>
            <Typography>{data.runtime}</Typography>
          </Stack>
        </Grid>
      </Grid>
      <Grid container>
        <Grid container direction='column'>
          <Typography>IMDb Rating</Typography>
          <Grade />
          <Typography>{data.vote_average} / 10</Typography>
          <Typography>{data.vote_count}</Typography>
        </Grid>
        <Grid container direction='column'>
          <Typography>YOUR RATING</Typography>
          <StarBorder />
          <Typography>Rate</Typography>
        </Grid>
        <Grid container direction='column'>
          <Typography>POPULARITY</Typography>
          <Typography>{data.popularity}</Typography>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default TitleBar
