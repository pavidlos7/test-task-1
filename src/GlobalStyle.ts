import { createGlobalStyle, css } from 'styled-components';
import constants from './constants';

const reset = css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  body {
    line-height: 1;
  }

  ul,
  ol {
    list-style: none;
  }

  a,
  a:active,
  a:focus,
  a:hover,
  a:visited {
    color: inherit;
    text-decoration: none;
  }

  input,
  button,
  textarea,
  select {
    color: inherit;
    font: inherit;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
`;

export default createGlobalStyle`
  ${reset}

  body {
    color: ${constants.colors.text1};
    font-family: "Open Sans", sans-serif;
    font-size: 16px;
  }
`;
