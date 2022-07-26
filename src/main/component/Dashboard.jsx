import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Card, CardContent, CardHeader, ImageList,
} from '@mui/material';
import Thumbnail from '../common/Thumbnail';
import { retrieve, select } from '../slice/popularSlice';

function Dashboard() {
  const dispatch = useDispatch();
  const { popular } = useSelector(select);
  const { loading, error, data } = popular;

  useEffect(() => {
    dispatch(retrieve());
  }, [dispatch]);

  if (error) {
    return (
      <div>
        {error}
      </div>
    );
  }

  if (loading) {
    return (
      <div>
        loading...
      </div>
    );
  }

  if (data && data.results) {
    return (
      <Card>
        <CardHeader title="Popular" sx={{ padding: '10px 0 0 10px' }} />
        <CardContent sx={{ padding: '0 !important' }}>
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
        </CardContent>
      </Card>
    );
  }
}

export default Dashboard;
