import React from 'react'
import {connect} from 'react-redux'
import {COLS,TILE_WIDTH} from '../lib/minesweeper'
import {fetchTodos,toggleTodo, deleteTodo, getVisibleTodos} from '../reducers/tilesReducer';

const Tile = ({ uncovered, hasMine, neighborsMineCount, gameOver, cheat, onClick }) => (
    <button className={`tile ${uncovered && 'uncovered'} ${hasMine && 'has-mine'}`}
            onClick={onClick}>
    <span className={`t-${!hasMine && neighborsMineCount}`}>
      {(((gameOver && hasMine) || (cheat && hasMine)) && '💣')}
        {(uncovered && !hasMine ? neighborsMineCount : undefined)}
    </span>
    </button>
);

const Tiles = ({ tiles, onTileClick, gameOver, cheat }) => (
    <div className="tiles" style={{ width: (COLS * TILE_WIDTH) }}>
        {_.times(tiles.count, (i) => (
            <Tile key={i}
                  {...tiles[i]}
                  gameOver={gameOver}
                  cheat={cheat}
                  onClick={() => !gameOver && onTileClick(i, tiles[i].hasMine)}
            />
        ))}
    </div>
)

export default connect(
    (state) => ({
        gameOver: state.gameOver,
        tiles: state.tiles,
        cheat: state.cheat,onTileClick: tileClick
    })
)(Tiles)