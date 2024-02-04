import React from 'react'
import Grid from '@mui/material/Unstable_Grid2'
import ActionBar from './ActionBar'
import TitleBar from './TitleBar'

const Top: React.FC = () => {
  return (
    <Grid container justifyContent="center">
      <Grid container direction="column" width="1280px">
        <ActionBar />
        <TitleBar />
      </Grid>
    </Grid>
  )
}

export default Top
