import { CardMedia } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { IMAGE_URL_W500 } from '../../api'
import { useAppSelector } from '../../hook'

const CardScroll: React.FC = () => {
  const { data } = useAppSelector(state => state.movie)

  const items = []

  for (let i = 0; i < 12; i += 4) {
    items.push(
      <Grid container>
        {data.images.backdrops
          .slice(i, i + 4)
          .map((image) => (
            <CardMedia
              key={image.iso_639_1}
              component='img'
              sx={{ height: '185px', width: '185px', mr: 2 }}
              src={IMAGE_URL_W500 + image.file_path}
            />
          ))
        }
      </Grid>
    )
  }

  return (
    <Grid container wrap='nowrap' sx={{ overflow: 'hidden', padding: '0 24px', width: '100%' }}>
      <Carousel
        sx={{ width: '100%' }}
        indicators={false}
        autoPlay={false}
        cycleNavigation={false}
        animation='slide'
      >
        {items}
      </Carousel>
    </Grid>
  )
}

export default CardScroll
