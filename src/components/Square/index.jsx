import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function Square({ index, value, onTap }) {
  function handleSquareClick() {
    onTap(index);
  }

  return <Container onClick={handleSquareClick}>{value}</Container>;
}

Square.propTypes = {
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  onTap: PropTypes.func.isRequired,
};
