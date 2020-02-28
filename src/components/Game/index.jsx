import React, { useState } from 'react';

import { Container } from './styles';
import PlayersData from './players.data';
import Board from '../Board';
import Monitoring from '../Monitoring';

export default function Game() {
  const players = PlayersData;
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [squares, setSquares] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [plays, setPlays] = useState([]);

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

  function backInPlay(index) {
    setSquares(plays[index]);
  }

  return (
    <Container>
      <Board squares={squares} players={players} onTap={markSquare} />
      <Monitoring plays={plays} onTap={backInPlay} />
    </Container>
  );
}
