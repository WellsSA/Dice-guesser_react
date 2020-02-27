import React, { useState, useEffect } from 'react';

import { Container, Monitoring } from './styles';
import Board from '../Board';

export default function Game() {
  const currentPlayer = {
    id: 1,
    marker: 'X',
  };
  const [squares, setSquares] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);

  useEffect(() => {
    console.log(squares);
  }, [squares]);

  function markSquare(index) {
    setSquares(oldState => {
      console.log(oldState);
      const newState = [...oldState];
      newState[index] = currentPlayer.id;
      return newState;
    });
  }

  return (
    <Container>
      <Board squares={squares} onTap={markSquare} />
      <Monitoring />
    </Container>
  );
}
