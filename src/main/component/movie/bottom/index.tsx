import React from 'react'
import { Grid, Paper, ThemeProvider } from '@mui/material'
import DetailsLeft from './DetailsLeft'
import DetailsRight from './DetailsRight'
import { lightTheme } from '../../../constant/theme'
import { MovieImagesProps } from '../../../props/movie/movieImagesProps'

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

Bottom.propTypes = {
  movieImagesData: MovieImagesProps.isRequired
}

export default Bottom
