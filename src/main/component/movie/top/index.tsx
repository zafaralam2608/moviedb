import React from 'react'
import Grid from '@mui/material/Unstable_Grid2'
import ActionBar from './ActionBar'
import TitleBar from './TitleBar'
import Summary from './summary'

const Top: React.FC = () => {
  return (
    <Grid container justifyContent="center">
      <Grid container direction="column" width="1280px">
        <ActionBar />
        <TitleBar />
        <Summary />
      </Grid>
    </Grid>
  )
}

export default Top
