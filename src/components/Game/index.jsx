import React, { useState, useEffect } from 'react';

import { Container, Monitoring } from './styles';
import Board from '../Board';

export default function Game() {
  const players = [
    {
      marker: '',
    },
    {
      marker: 'X',
    },
    {
      marker: 'O',
    },
  ];

  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [squares, setSquares] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [plays, setPlays] = useState([]);

  useEffect(() => {
    console.log(squares);
  }, [squares]);

  function markSquare(index) {
    if (squares[index] !== 0) return;

    setCurrentPlayer(oldPlayer => (oldPlayer === 1 ? 2 : 1));

    setPlays(oldState => [...oldState, squares]);
    setSquares(oldState => {
      console.log(oldState);
      const newState = [...oldState];
      newState[index] = currentPlayer;
      return newState;
    });
  }

  return (
    <Container>
      <Board squares={squares} players={players} onTap={markSquare} />
      <Monitoring>
        {plays.map((play, index) => (
          <li key={index}>{play}</li>
        ))}
      </Monitoring>
    </Container>
  );
}
