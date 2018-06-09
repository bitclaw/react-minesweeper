import React, { Component } from 'react';
import minesweeperIcon from './minesweeper.svg';
import './App.css';
import Board from './Board.js'

class App extends Component {
    constructor (props) {
        super(props);

        this.state = {
            height: 8,
            width: 8,
            mines: 7,
        }
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={minesweeperIcon} className="App-logo" alt="logo" />
                    <h1 className="App-title">Minesweeper</h1>
                </header>
                <div className="minesweeper">
                    <Board height={this.state.height} width={this.state.width} mines={this.state.mines} />
                </div>
            </div>
        );
    }
}

export default App;
