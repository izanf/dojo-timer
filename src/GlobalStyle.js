import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  h1, h2, h3, h4, span, p, li {
    font-family: 'Roboto', sans-serif;
  }

  html, body, #root {
    height: 100%;
  }
`

export default GlobalStyle
