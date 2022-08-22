import React from 'react';
import { Grid } from '@mui/material';
import MediaBox from './MediaBox';
import SummaryLeft from './SummaryLeft';
import SummaryRight from './SummaryRight';
import { MovieDetailsProps } from '../../../../props/movie/movieDetailsProps';
import { MovieCreditsProps } from '../../../../props/movie/movieCreditsProps';
import { MovieImagesProps } from '../../../../props/movie/movieImagesProps';
import { MovieVideosProps } from '../../../../props/movie/movieVideosProps';

function Summary({
  movieDetailsData, movieCreditsData, movieImagesData, movieVideosData,
}) {
  return (
    <Grid container>
      <MediaBox
        movieDetailsData={movieDetailsData}
        movieImagesData={movieImagesData}
        movieVideosData={movieVideosData}
      />
      <Grid container sx={{ justifyContent: 'space-between', padding: '0 24px 8px 24px' }}>
        <SummaryLeft
          movieDetailsData={movieDetailsData}
          movieCreditsData={movieCreditsData}
        />
        <SummaryRight />
      </Grid>
    </Grid>
  );
}

Summary.propTypes = {
  movieDetailsData: MovieDetailsProps.isRequired,
  movieCreditsData: MovieCreditsProps.isRequired,
  movieImagesData: MovieImagesProps.isRequired,
  movieVideosData: MovieVideosProps.isRequired,
};

export default Summary;
