import React from 'react'
import { Paper, ThemeProvider } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import DetailsLeft from './DetailsLeft'
import DetailsRight from './DetailsRight'
import { lightTheme } from '../../../constant/theme'

const Bottom: React.FC = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Paper square sx={{ width: '100%' }}>
        <Grid container justifyContent="center">
          <Grid container sx={{ width: '1280px', justifyContent: 'center' }}>
            <DetailsLeft />
            <DetailsRight />
          </Grid>
        </Grid>
      </Paper>
    </ThemeProvider>
  )
}

export default Bottom
