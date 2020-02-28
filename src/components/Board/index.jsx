import React from 'react';
import PropTypes from 'prop-types';
import Square from '../Square';
import { Container } from './styles';

export default function Board({ squares, players, onTap }) {
  return (
    <Container>
      {squares.map((value, index) => (
        <Square
          key={index}
          index={index}
          value={players[value].marker}
          onTap={onTap}
        />
      ))}
    </Container>
  );
}

Board.propTypes = {
  squares: PropTypes.arrayOf(PropTypes.number).isRequired,
  players: PropTypes.arrayOf(PropTypes.object).isRequired,
  onTap: PropTypes.func.isRequired,
};
