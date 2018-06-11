import React from 'react'
import {connect} from 'react-redux'

const Resetter = ({ onClick, gameWon, gameOver }) => (
    <div className="resetter" onClick={onClick}>
        <button>
            {gameWon && '😎'}
            {gameOver && '😵'}
            {!gameWon && !gameOver && '🙂'}
        </button>
    </div>
);

export default connect(
    (state) => ({
        onClick: state.onClick,
        gameWon: state.gameWon,
        gameOver: state.gameOver,
    })
)(Resetter)