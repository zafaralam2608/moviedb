import React from 'react';
import { Toolbar } from '@mui/material';
import PropTypes from 'prop-types';

function TitleBar({ originalTitle }) {
  return (
    <Toolbar>
      {originalTitle}
    </Toolbar>
  );
}

TitleBar.propTypes = {
  originalTitle: PropTypes.string.isRequired,
};

export default TitleBar;
