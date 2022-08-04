import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  Alert, Card, CardContent, CardHeader, Grid, ImageList, Skeleton, Snackbar,
} from '@mui/material';
import PropTypes from 'prop-types';
import Thumbnail from './Thumbnail';

function CardScroll({ title, selector, retrieve }) {
  const def = Array.from(new Array(8));

  const dispatch = useDispatch();
  const { loading, error, data } = selector;

  useEffect(() => {
    dispatch(retrieve());
  }, [dispatch]);

  return (
    <Card>
      {
        error && (
          <Snackbar open anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
            <Alert severity="error">{error}</Alert>
          </Snackbar>
        )
      }
      <CardHeader title={title} sx={{ padding: '10px 0 0 10px' }} />
      <CardContent sx={{ padding: '0 !important' }}>
        {
          (loading || error)
            ? (
              <Grid container justifyContent="space-evenly">
                {
                  def.map(() => (
                    <Skeleton variant="rectangular" height={336.74} width={170} sx={{ margin: '5px' }} />
                  ))
                }
              </Grid>
            )
            : (
              <ImageList sx={{
                margin: '0',
                gridAutoFlow: 'column',
                gridTemplateColumns: 'repeat(auto-fill,minmax(170px,1fr)) !important',
                gridAutoColumns: 'minmax(170px, 1fr)',
              }}
              >
                {
                  data.results.map((item) => (
                    <Thumbnail
                      key={item.id}
                      id={item.release_date}
                      title={item.original_title}
                      source={item.poster_path}
                    />
                  ))
                }
              </ImageList>
            )
        }
      </CardContent>
    </Card>
  );
}

CardScroll.propTypes = {
  title: PropTypes.string.isRequired,
  retrieve: PropTypes.func.isRequired,
  selector: PropTypes.exact({
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string.isRequired,
    data: PropTypes.string.isRequired,
  }).isRequired,
};

export default CardScroll;
