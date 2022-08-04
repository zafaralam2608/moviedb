import React from 'react';
import { useSelector } from 'react-redux';
import CardScroll from '../common/CardScroll';
import { select, retrieve } from '../slice/popularSlice';

function Dashboard() {
  const { popular } = useSelector(select);

  return (
    <CardScroll
      title="Popular"
      selector={popular}
      retrieve={retrieve}
    />
  );
}

export default Dashboard;
