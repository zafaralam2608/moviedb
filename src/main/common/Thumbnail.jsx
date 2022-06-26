import React from 'react';
import { Card, CardHeader, CardMedia } from '@mui/material';
import { PropTypes } from 'prop-types';
import { IMAGE_URL } from '../constant/data';

function Thumbnail({ id, title, source }) {
  return (
    <Card sx={{ margin: '10px', padding: '10px' }}>
      <CardHeader title={id} subheader={title.slice(0, 27)} />
      <CardMedia
        component="img"
        sx={{ height: '375px', width: '250px' }}
        src={`${IMAGE_URL}${source}`}
      />
    </Card>
  );
}

Thumbnail.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
};

export default Thumbnail;
