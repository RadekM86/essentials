import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import logo_dark from './logo_dark.svg';
import logo_mobile from './logo_mobile.svg';
import logo_mobile_dark from './logo_mobile_dark.svg';
import './App.css';

import _ from 'lodash';



import Header from './components/Header';
import Card from './components/Card';
import Container from './components/Container';
import Toggle from './components/Toggle';
import CounterContainer from './redux/counters/components/CounterContainer';
import AddButton from './redux/counters/components/AddButton';

import { createGlobalStyle, ThemeProvider } from 'styled-components';

import lightTheme from './themes/light';
import darkTheme from './themes/dark';


const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({theme})=>theme.colors.background};
    transition: background-color 1s ease;
  }
  * {
    transition: box-shadow 1s ease;
    transition: color 1s ease;
    transition: background-color 1s ease;
  }
`;

function App() {
  const stored = localStorage.getItem("isDarkMode");
  const [isDarkMode, setIsDarkMode] = useState(
    stored === "true" ? true : false
  );
  const [isMobile, setMobile] = useState(
    window.innerWidth < 450 ? true : false
  );

  const updateWindowSize = () => {
    window.innerWidth < 450 ? setMobile(true) : setMobile(false)
  }

  useEffect(()=>{
    window.addEventListener('resize', _.throttle(updateWindowSize, 300));
  })

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <div className="App">
        <GlobalStyle />
        <Header>
          <img src={
            isMobile
            ? isDarkMode 
              ? logo_mobile_dark 
              : logo_mobile 
            : isDarkMode 
              ? logo_dark 
              : logo} className="App-logo" alt="logo" />
          <Toggle 
            onClick={() => {
              setIsDarkMode(!isDarkMode)
              localStorage.setItem("isDarkMode", !isDarkMode);
              }
            }/>
        </Header>
        <Container>
          <Card wide={true}>
            <div className="center">
              <AddButton color="accent">+</AddButton>
            </div>
          </Card>
          <CounterContainer />
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;
