import styled from 'styled-components';

export const Container = styled.ul`
  padding: 4px;

  button {
    border-color: ${({ right }) => (right ? '#0f0' : '#67daf9')};
  }
`;
