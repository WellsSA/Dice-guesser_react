import React, { useState, useEffect } from 'react';

import { Container, Sideboard, Board, Dices } from './styles';
import Monitoring from '../Monitoring';

const INITIAL_STATE = {
  initialPlays: [],
};

export default function Game() {
  const [diceOne, setDiceOne] = useState(0);
  const [diceTwo, setDiceTwo] = useState(0);
  const [guess, setGuess] = useState(0);
  const [plays, setPlays] = useState(INITIAL_STATE.initialPlays);
  const [rightGuesses, setRightGuesses] = useState(0);

  useEffect(() => {
    let right = false;

    if (guess && diceOne + diceTwo === +guess) {
      setRightGuesses(prev => prev + 1);
      alert(`Você acertou ${rightGuesses + 1} vez(es)!`);
      right = true;
    }

    setPlays(prevState => [
      ...prevState,
      {
        diceOne,
        diceTwo,
        guess,
        right,
      },
    ]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [diceOne, diceTwo, guess]);

  function play() {
    setDiceOne(Math.floor(Math.random() * 7));
    setDiceTwo(Math.floor(Math.random() * 7));
  }

  return (
    <Container>
      <Board>
        <Dices>
          <span>{diceOne}</span>
          <span>{diceTwo}</span>
        </Dices>
        <label htmlFor="guess">Qual será a soma dos dados?</label>
        <input
          id="guess"
          type="number"
          value={guess}
          onChange={e => setGuess(e.target.value)}
          placeholder="Your guess"
        />
        <button type="button" onClick={play}>
          Play
        </button>
      </Board>
      <Sideboard>
        <Monitoring plays={plays} onTap={() => alert('here!')} />
      </Sideboard>
    </Container>
  );
}
