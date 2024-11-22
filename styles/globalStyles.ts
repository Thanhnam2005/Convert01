import { createGlobalStyle } from 'styled-components'
import { ThemeType } from './theme'

const GlobalStyle = createGlobalStyle<{ theme: ThemeType }>`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Poppins', sans-serif;
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.3s linear;
  }

  a {
    color: ${({ theme }) => theme.primary};
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }
`

export default GlobalStyle

