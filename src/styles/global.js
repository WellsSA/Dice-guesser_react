import { createGlobalStyle } from 'styled-components';
import { darken, transparentize } from 'polished';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 14px 'Open Sans','Roboto', sans-serif;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }

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
