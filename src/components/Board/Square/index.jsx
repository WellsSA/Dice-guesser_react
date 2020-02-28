import React, { memo } from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

function Square({ index, value, onTap }) {
  function handleSquareClick() {
    onTap(index);
  }

  return <Container onClick={handleSquareClick}>{value}</Container>;
}

Square.propTypes = {
  index: PropTypes.number.isRequired,
  value: PropTypes.string.isRequired,
  onTap: PropTypes.func.isRequired,
};

export default memo(Square);
