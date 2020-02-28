import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function Play({ index, onTap }) {
  return (
    <Container>
      <button type="button" onClick={() => onTap(index)}>
        Back to play {index}
      </button>
    </Container>
  );
}

Play.propTypes = {
  index: PropTypes.number.isRequired,
  onTap: PropTypes.func.isRequired,
};
