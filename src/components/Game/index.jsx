import React, { useState } from 'react';

import { Container, Sideboard, GameOptions } from './styles';
import { winMatrixData, checkWin, checkBestPlay } from './game.data';
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

  function handleWin(matrix) {
    const win = checkWin(winMatrixData, matrix);
    if (win) {
      alert(`O Jogador ${players[win].marker} venceu`);
    }
  }

  function play(index) {
    setCurrentPlayer(oldPlayer => (oldPlayer === 1 ? 2 : 1));

    setPlays(oldState => [...oldState, squares]);

    setSquares(oldState => {
      const newState = [...oldState];
      newState[index] = currentPlayer;

      handleWin(newState);
      return newState;
    });
  }

  function markSquare(index) {
    if (squares[index] !== 0) return;

    play(index);
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
    const [firstTry, secondTry, thirdTry] = checkBestPlay(
      winMatrixData,
      squares
    );

    if (!squares[firstTry]) return play(firstTry);
    if (!squares[secondTry]) return play(secondTry);
    if (!squares[thirdTry]) return play(thirdTry);

    return randomPlay();
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
