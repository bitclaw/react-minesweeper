import React from 'react'
import {connect} from 'react-redux'
import {resetClick as onClick} from '../../actions/minesweeper'

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
    (state) => ({gameWon: state.gameWon,gameOver:state.gameWon}),
    {onClick}
)(Resetter)