import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function Play({ right, children }) {
  return (
    <Container right={right}>
      <button type="button">{children}</button>
    </Container>
  );
}

Play.propTypes = {
  right: PropTypes.bool.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  children: PropTypes.any.isRequired,
};
