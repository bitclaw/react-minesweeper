import React from 'react';
import {connect} from "react-redux";
import {resetClick} from "../actions/minesweeper";
import Tiles from './Tiles'

const Digit = ({ digit }) => {
    const isOne = Math.floor(digit) === 1;
    const style = {
        width:     (isOne && '100%'),
        textAlign: (isOne && 'right')
    };

    return (
        <span className="digit">
      <span className="sdigit">8</span>
      <span style={style}>{Math.floor(digit)}</span>
    </span>
    );
};

const Counter = ({ val }) => (
    <div className="counter">
        <Digit digit={ (val / 100)      } />
        <Digit digit={ (val % 100) / 10 } />
        <Digit digit={ (val % 10 )      } />
    </div>
);

const Resetter = ({ onClick, gameWon, gameOver }) => (
    <div className="resetter" onClick={onClick}>
        <button>
            {gameWon && '😎'}
            {gameOver && '😵'}
            {!gameWon && !gameOver && '🙂'}
        </button>
    </div>
);

let Header = ({ time, minesCount, onResetClick, gameOver, gameWon }) => (
    <div className="header">
        <Counter val={minesCount} />
        <Resetter onClick={onResetClick} gameOver={gameOver} gameWon={gameWon} />
        <Counter val={time} />
    </div>
);

const mapStateToHeaderProps = ({ time, tiles: { minesCount }, gameOver, gameWon }) => ({
    time, minesCount, gameOver, gameWon
});

Header = connect(mapStateToHeaderProps, {
    onResetClick: resetClick
})(Header);

const Minesweeper = () => (
    <div>
        <div className="Minesweeper-app">
            <Header />
            <div className="separator" />
            <Tiles />
        </div>
    </div>
);

export default Minesweeper