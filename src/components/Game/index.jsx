import React, { useState } from 'react';

import { Container, Sideboard, Board } from './styles';
import Monitoring from '../Monitoring';

const INITIAL_STATE = {
  initialPlays: [],
};

export default function Game() {
  const [plays, setPlays] = useState(INITIAL_STATE.initialPlays);

  return (
    <Container>
      <Board />
      <Sideboard>
        <Monitoring plays={plays} onTap={() => alert('here!')} />
      </Sideboard>
    </Container>
  );
}
