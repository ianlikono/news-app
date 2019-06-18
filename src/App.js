import React, { useContext, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import Navbar from './components/Nav';
import { MeContext } from './context/user';
import { fire } from './firebase';
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

const AppWrapper = styled.div`
  /* margin-top: 5rem; */
`;

function App() {
  const { updateToken, updateMe } = useContext(MeContext);
  useEffect(() => {
    fire.auth().onAuthStateChanged(user => {
      if (user) {
        updateMe(user);
        fire
          .auth()
          .currentUser.getIdToken(true)
          .then(token => {
            updateToken(token);
          });
      } else {
        fire
          .auth()
          .signInAnonymously()
          .catch(error => {
            console.log(error);
          });
      }
    });
  }, [updateMe, updateToken]);
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <React.Fragment>
          <GlobalStyle />
          <Navbar />
          <AppWrapper>{routes}</AppWrapper>
        </React.Fragment>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
