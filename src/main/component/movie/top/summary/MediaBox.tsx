import React from 'react'
import { PermMedia, Subscriptions } from '@mui/icons-material'
import {
  ButtonGroup, CardActionArea, CardMedia, Grid, Typography
} from '@mui/material'
import { IMAGE_URL_ORIGINAL, IMAGE_URL_W500 } from '../../../../../api'
import { useAppSelector } from '../../../../../hook'

const MediaBox: React.FC = () => {
  const { data } = useAppSelector(state => state.movie)
  const { images, videos } = data

  const movieVideosCount = videos.results.length
  const movieImagesCount = images.backdrops.length + images.logos.length + images.posters.length
  const videosString = `${movieVideosCount < 100 ? movieVideosCount : '99+'}  VIDEOS`
  const imagesString = `${movieImagesCount < 100 ? movieImagesCount : '99+'}  PHOTOS`

  return (
    <Grid container sx={{ margin: '0 24px 8px 24px' }}>
      <Grid item>
        <CardMedia component="img" image={IMAGE_URL_W500 + data.poster_path} alt="poster" width="284.44px" height="420.96px" />
      </Grid>
      <Grid item sx={{ margin: '0 4px' }}>
        <CardMedia component="img" image={IMAGE_URL_ORIGINAL + data.backdrop_path} alt="video" width="746.44px" height="419.87px" />
      </Grid>
      <ButtonGroup orientation="vertical" sx={{ width: '193.13px', height: '420.96px', justifyContent: 'space-evenly' }}>
        <CardActionArea sx={{ textAlign: 'center' }} href="#/">
          <Subscriptions sx={{ fontSize: 40 }} />
          <Typography paragraph variant="caption">{videosString}</Typography>
        </CardActionArea>
        <CardActionArea sx={{ textAlign: 'center' }} href="#/">
          <PermMedia sx={{ fontSize: 40 }} />
          <Typography paragraph variant="caption">{imagesString}</Typography>
        </CardActionArea>
      </ButtonGroup>
    </Grid>
  )
}

export default MediaBox
