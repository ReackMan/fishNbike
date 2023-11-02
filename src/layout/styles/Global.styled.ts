import {createGlobalStyle} from "styled-components";
import {mainTheme} from "./Theme";

export const GlobalStyle = createGlobalStyle<{ customTheme: string, overflow: boolean }>`

  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;

    background: ${({theme}) => theme.body};

    color: ${({theme}) => theme.text};

    transition: all 0.50s linear;

    overflow: ${props => props.overflow === false ? 'hidden' : 'auto'};
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    background-color: unset;
    border: none;
  }
  
  section {
    margin-bottom: 200px;
    padding: 0 15px;
  }
  
  h2 {
    margin: 0;
    color: ${props => props.customTheme === 'light' 
            ? mainTheme.colors.accentLight : mainTheme.colors.accentDark};
  }

  h3 {
    color: ${props => props.customTheme === 'light'
            ? mainTheme.colors.fontLight : mainTheme.colors.fontDark};
  }

  p {
    color: ${props => props.customTheme === 'light' ?
            mainTheme.colors.fontLight : mainTheme.colors.customText};
  }
  
`;