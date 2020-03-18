import styled from 'styled-components';
import { transparentize, darken } from 'polished';

export const Container = styled.div`
  width: 800px;
  height: 600px;
  display: flex;
`;

export const GameOptions = styled.div``;

export const Sideboard = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  flex: 1;
  background: ${transparentize(0.6, darken(0.1, '#282c33'))};
  padding: 12px;
  border-radius: 4px;
`;

export const Board = styled.div`
  width: 70%;
  display: flex;
  flex-wrap: wrap;
`;
