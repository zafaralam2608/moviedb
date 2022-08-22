import React from 'react';
import { Toolbar } from '@mui/material';
import { MovieDetailsProps } from '../../../props/movie/movieDetailsProps';

function TitleBar({ movieDetailsData }) {
  return (
    <Toolbar>
      {movieDetailsData.original_title}
    </Toolbar>
  );
}

TitleBar.propTypes = {
  movieDetailsData: MovieDetailsProps.isRequired,
};

export default TitleBar;
