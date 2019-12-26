import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Card from './components/Card';
import Container from './components/Container';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import lightTheme from './themes/light';
import darkTheme from './themes/dark';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({theme})=>theme.colors.background};
  }
`;

function App() {
  const stored = localStorage.getItem("isDarkMode");
  const [isDarkMode, setIsDarkMode] = useState(
    stored === "true" ? true : false
  );
  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <div className="App">
        <GlobalStyle />
        <Header>
          <img src={logo} className="App-logo" alt="logo" />
          <button onClick={() => {
          setIsDarkMode(!isDarkMode)
          localStorage.setItem("isDarkMode", !isDarkMode);
          }
          }>Dark mode</button>
        </Header>
        <Container>
          <Card />
          <Card wide={true} />
          <Card />
          <Card />
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;
