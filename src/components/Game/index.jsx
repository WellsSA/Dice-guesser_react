import React, { useState } from 'react';

import { Container, Sideboard, GameOptions } from './styles';
import PlayersData from './players.data';
import Board from '../Board';
import Monitoring from '../Monitoring';

const INITIAL_STATE = {
  initialPlayer: 1,
  initialSquares: [0, 0, 0, 0, 0, 0, 0, 0, 0],
  initialPlays: [],
};

export default function Game() {
  const players = PlayersData;
  const [currentPlayer, setCurrentPlayer] = useState(
    INITIAL_STATE.initialPlayer
  );
  const [squares, setSquares] = useState(INITIAL_STATE.initialSquares);
  const [plays, setPlays] = useState(INITIAL_STATE.initialPlays);

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

  function restartGame() {
    const { initialPlayer, initialSquares, initialPlays } = INITIAL_STATE;

    setCurrentPlayer(initialPlayer);
    setSquares(initialSquares);
    setPlays(initialPlays);
  }

  function randomPlay() {
    alert('random play');
  }

  return (
    <Container>
      <Board squares={squares} players={players} onTap={markSquare} />
      <Sideboard>
        <Monitoring plays={plays} onTap={backInPlay} />
        <GameOptions>
          <button type="button" onClick={restartGame}>
            Restart
          </button>
          <button type="button" onClick={randomPlay}>
            Random play
          </button>
        </GameOptions>
      </Sideboard>
    </Container>
  );
}
