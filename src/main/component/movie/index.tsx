import { Grid } from '@mui/material'
import React from 'react'
import Top from './top'
import Bottom from './bottom'

const Movie: React.FC = () => {
  return (
    <Grid container>
      <Top />
      <Bottom />
    </Grid>
  )
}

export default Movie
