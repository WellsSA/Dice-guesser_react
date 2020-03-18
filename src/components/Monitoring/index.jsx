import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styles';

import Play from './Play';

export default function Monitoring({ plays }) {
  return (
    <Container>
      {plays.map((play, index) => {
        const { diceOne, diceTwo, guess, right } = play;

        return (
          <Play
            key={index}
            right={right}
          >{`${diceOne} + ${diceTwo} = ${guess} ?`}</Play>
        );
      })}
    </Container>
  );
}

Monitoring.propTypes = {
  plays: PropTypes.arrayOf(PropTypes.any).isRequired,
};
