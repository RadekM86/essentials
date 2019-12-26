import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header'

function App() {
  return (
    <div className="App">
      <Header>
        <img src={logo} className="App-logo" alt="logo" width="128px" />
      </Header>
    </div>
  );
}

export default App;
