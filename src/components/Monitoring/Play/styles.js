import styled from 'styled-components';
import { darken, transparentize } from 'polished';

export const Container = styled.ul`
  padding: 4px;
  button {
    border: none;
    border: 1px solid #67daf9;
    color: #fff;
    padding: 4px 8px;
    background: transparent;
    border-radius: 4px;
    &:hover {
      background: ${transparentize(0.8, darken(0.2, '#282c33'))};
    }
  }
`;
