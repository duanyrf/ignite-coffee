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
  }

  body {
    min-height: 100vh;
    background: ${(props) => props.theme['base-background']};
  }

  body,
  input,
  button {
    font-family: 'Roboto', sans-serif;
    color: ${(props) => props.theme['base-text']};
    font-size: 1rem;
    line-height: 130%;
    font-weight: 400;
  }

  button {
    cursor: pointer;
  }
`
