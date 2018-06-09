import React, { Component } from 'react';
import minesweeperIcon from './minesweeper.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={minesweeperIcon} className="App-logo" alt="logo" />
          <h1 className="App-title">Minesweeper</h1>
        </header>
        <p className="App-intro">

        </p>
      </div>
    );
  }
}

export default App;
