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
  flex-direction: column;
  flex-wrap: wrap;
`;

export const Dices = styled.div`
  color: #fff; // 67daf9
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 40px;

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    width: 100px;
    height: 100px;
    padding: 5px;
    margin: 5px;
    border: 1px solid #fff;
    position: relative;

    &::before {
      content: 'Dado';
      position: absolute;
      top: -20px;
      left: 4px;
      padding: 1px;
      background: #282c33;
    }
  }
`;
