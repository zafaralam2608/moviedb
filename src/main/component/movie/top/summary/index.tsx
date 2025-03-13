import React from 'react'
import Grid from '@mui/material/Grid2'
import MediaBox from './MediaBox'
import SummaryLeft from './SummaryLeft'
import SummaryRight from './SummaryRight'

const Summary: React.FC = () => {
  return (
    <Grid container>
      <MediaBox />
      <Grid container sx={{ justifyContent: 'space-between', padding: '0 24px 8px 24px' }}>
        <SummaryLeft />
        <SummaryRight />
      </Grid>
    </Grid>
  )
}

export default Summary
