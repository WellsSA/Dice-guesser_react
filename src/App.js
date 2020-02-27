import React from 'react';

import { Container } from './styles';
import GlobalStyles from './styles/global';
import Game from './components/Game';

function App() {
  return (
    <>
      <GlobalStyles />
      <Container>
        <Game />
      </Container>
    </>
  );
}

export default App;
