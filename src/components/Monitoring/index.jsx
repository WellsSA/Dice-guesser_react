import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styles';

import Play from './Play';

export default function Monitoring({ plays, onTap }) {
  return (
    <Container>
      {plays.map((_, index) => (
        <Play key={index} index={index} onTap={onTap} />
      ))}
    </Container>
  );
}

Monitoring.propTypes = {
  plays: PropTypes.arrayOf(PropTypes.any).isRequired,
  onTap: PropTypes.func.isRequired,
};
