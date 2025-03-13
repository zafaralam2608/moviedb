import React from 'react';
import { Box, Grid2 as Grid} from '@mui/material';
import { data } from '../constant/data';
import Thumbnail from './Thumbnail';

function Album() {
  return (
    <Box>
      <Grid container justifyContent="center">
        {
          data.results.map(
            (item) => (
              <Thumbnail
                key={item.id}
                id={item.release_date}
                title={item.original_title}
                source={item.poster_path}
              />
            ),
          )
        }
      </Grid>
    </Box>
  );
}

export default Album;
