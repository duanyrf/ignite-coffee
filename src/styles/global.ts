import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
  }

  * {
    /* CSS reset */
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background-color: ${(props) => props.theme['base-background']};
    color: ${(props) => props.theme['base-text']};
  }

  body,
  input,
  button {
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    line-height: 130%;
    font-weight: 400;
  }

  button {
    cursor: pointer;
  }
`
