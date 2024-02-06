import React from 'react'
import { PermMedia, Subscriptions } from '@mui/icons-material'
import {
  ButtonGroup, CardActionArea, CardMedia, Grid, Typography
} from '@mui/material'
import { IMAGE_URL_ORIGINAL, IMAGE_URL_W500 } from '../../../../constant/api'
import { movieDetails } from '../../../../constant/data'

const MediaBox: React.FC = () => {
  return (
    <Grid container sx={{ margin: '0 24px 8px 24px' }}>
      <Grid item>
        <CardMedia component="img" image={IMAGE_URL_W500 + movieDetails.poster_path} alt="poster" width="284.44px" height="420.96px" />
      </Grid>
      <Grid item sx={{ margin: '0 4px' }}>
        <CardMedia component="img" image={IMAGE_URL_ORIGINAL + movieDetails.backdrop_path} alt="video" width="746.44px" height="419.87px" />
      </Grid>
      <ButtonGroup orientation="vertical" sx={{ width: '193.13px', height: '420.96px', justifyContent: 'space-evenly' }}>
        <CardActionArea sx={{ textAlign: 'center' }} href="#/">
          <Subscriptions sx={{ fontSize: 40 }} />
          <Typography paragraph variant="caption">99+ VIDEOS</Typography>
        </CardActionArea>
        <CardActionArea sx={{ textAlign: 'center' }} href="#/">
          <PermMedia sx={{ fontSize: 40 }} />
          <Typography paragraph variant="caption">99+ PHOTOS</Typography>
        </CardActionArea>
      </ButtonGroup>
    </Grid>
  )
}

export default MediaBox
