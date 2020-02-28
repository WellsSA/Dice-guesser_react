import styled from 'styled-components';
import { transparentize, darken } from 'polished';

export const Container = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  flex: 1;
  background: ${transparentize(0.6, darken(0.1, '#282c33'))};
  padding: 12px;
`;
