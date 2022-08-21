import React from 'react';
import { CardActionArea, Grid } from '@mui/material';
import { MovieImagesProps } from '../props/movie/movieImagesProps';
import { IMAGE_URL_W185 } from '../constant/api';

function CardScroll({ movieImagesData }) {
  return (
    <Grid container wrap="nowrap" sx={{ overflow: 'hidden', padding: '0 24px' }}>
      {
        movieImagesData.backdrops.slice(0, 4).map((item) => (
          <CardActionArea key={item.file_path.slice(1, 6)} href="#/" sx={{ width: '185px', height: '185px', marginRight: '24px' }}>
            <img src={IMAGE_URL_W185 + item.file_path} alt="thumb" width="185px" height="185px" />
          </CardActionArea>
        ))
      }
    </Grid>
  );
}

CardScroll.propTypes = {
  movieImagesData: MovieImagesProps.isRequired,
};

export default CardScroll;
