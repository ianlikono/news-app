import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Navbar from './components/Nav';
import routes from './routes';
import theme from './theme';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    :before,
    :after {
      margin: 0;
      padding: 0;
      box-sizing: inherit;
    }
  }
  html {
    box-sizing: border-box;
    font-size: 62.5% !important;
    background-color: ${props => props.theme.backgroundColor};
  }
  body {
    font-family: ${props => props.theme.fontPrimary};
    font-weight: 300;
    line-height: 1.6;
    color: ${props => props.theme.textColorLight};
    background-color: ${props => props.theme.backgroundColor}
  }
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <React.Fragment>
          <GlobalStyle />
          <Navbar />
          {routes}
        </React.Fragment>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
