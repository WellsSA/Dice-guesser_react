import React from 'react';
import PropTypes from 'prop-types';
import Square from '../Square';
import { Container } from './styles';

export default function Board({ squares, onTap }) {
  return (
    <Container>
      {squares.map((value, index) => (
        <Square key={index} index={index} value={value} onTap={onTap} />
      ))}
    </Container>
  );
}

Board.propTypes = {
  squares: PropTypes.arrayOf(PropTypes.number).isRequired,
  onTap: PropTypes.func.isRequired,
};
