import styled from 'styled-components';
import { darken, transparentize } from 'polished';

export const Container = styled.div`
  width: 33.3%;
  height: 33.4%;
  border: 1px solid #67daf9;
  cursor: pointer;

  &:hover {
    background: ${transparentize(0.8, darken(0.2, '#282c33'))};
  }
`;
