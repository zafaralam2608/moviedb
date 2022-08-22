import React from 'react';
import { Card, CardHeader, CardMedia } from '@mui/material';
import { PropTypes } from 'prop-types';
import { IMAGE_URL } from '../constant/data';

function Thumbnail({ id, title, source }) {
  return (
    <Card
      sx={{ width: '170px', margin: '10px' }}
    >
      <CardMedia
        component="img"
        sx={{ height: '225px', width: '150px', margin: '10px' }}
        src={`${IMAGE_URL}${source}`}
      />
      <CardHeader
        title={id}
        titleTypographyProps={{ fontSize: '1rem' }}
        subheader={title}
        subheaderTypographyProps={{ fontSize: '0.8rem' }}
      />
    </Card>
  );
}

Thumbnail.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
};

export default Thumbnail;
