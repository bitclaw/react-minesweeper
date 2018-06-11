import React, { Component } from 'react';
import minesweeperIcon from './minesweeper.svg';
import './App.css';
import Header from './components/Header'
import Tiles from './components/Tiles.js'

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={minesweeperIcon} className="App-logo" alt="logo" />
                    <h1 className="App-title">Minesweeper</h1>
                </header>
                <div className="Minesweeper-app">
                    <Header />
                    <div className="separator" />
                </div>
            </div>
        );
    }
}

export default App;
