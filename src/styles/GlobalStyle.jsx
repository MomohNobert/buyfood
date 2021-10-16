import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    border: 0;
    outline: none;
    box-sizing: border-box;
    font-family: 'DM Sans';
  }

  body {
    width: 100vw;
    overflow-x: hidden;
  }

  a, button {
    color: inherit;
    cursor: pointer;
    text-decoration: none;
    outline: none;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
  }

  .orange {
    color: var(--orange);
  }

  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-track {
    background: black;
  }

  ::-webkit-scrollbar-thumb {
    background: var(--primary);
    border-radius: 5px;
    transition: background 0.25s linear;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: white;
  }
`;

export default GlobalStyle;
