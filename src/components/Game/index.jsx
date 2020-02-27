import React, { useState, useEffect } from 'react';

import { Container, Board, Monitoring, Square } from './styles';

export default function Game() {
  const currentPlayer = 1;
  const [squares, setSquares] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);

  useEffect(() => {
    console.log(squares);
  }, [squares]);

  function markSquare(index) {
    setSquares(oldState => {
      console.log(oldState);
      const newState = [...oldState];
      newState[index] = currentPlayer;
      return newState;
    });
  }

  return (
    <Container>
      <Board>
        {squares.map((value, index) => (
          <Square
            key={index}
            index={index}
            value={value}
            onClick={() => markSquare(index)}
          />
        ))}
      </Board>
      <Monitoring />
    </Container>
  );
}
