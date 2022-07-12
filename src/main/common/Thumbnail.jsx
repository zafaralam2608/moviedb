import React from 'react';
import { Card, CardHeader, CardMedia } from '@mui/material';
import { PropTypes } from 'prop-types';
import { IMAGE_URL } from '../constant/data';

function Thumbnail({ id, title, source }) {
  return (
    <Card
      sx={{ width: '270px', margin: '10px' }}
    >
      <CardMedia
        component="img"
        sx={{ height: '375px', width: '250px', margin: '10px' }}
        src={`${IMAGE_URL}${source}`}
      />
      <CardHeader title={id} subheader={title} />
    </Card>
  );
}

Thumbnail.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
};

export default Thumbnail;
