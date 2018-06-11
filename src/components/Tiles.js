import React from 'react'
import {COLS, TILE_WIDTH} from "../constants/minesweeper";
import {connect} from "react-redux";
import {tileClick} from "../actions/minesweeper";
import * as _ from "lodash";

const Tile = ({ uncovered, hasMine, neighborsMineCount, gameOver, cheat, onClick, isFlagged }) => (
    <button className={`tile ${uncovered && 'uncovered'} ${hasMine && 'has-mine'}`}
            onClick={onClick}>
    <span className={`t-${!hasMine && neighborsMineCount}`}>
      {(((gameOver && hasMine) || (cheat && hasMine)) && '💣')}
      {(((gameOver && hasMine) || (cheat && isFlagged)) && '🚩')}
        {(uncovered && !hasMine ? neighborsMineCount : undefined)}
    </span>
    </button>
);

let Tiles = ({ tiles, onTileClick, gameOver, cheat }) => (
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
);

const mapStateToTilesProps = ({ tiles, gameOver, cheat }) => ({
    gameOver,
    tiles,
    cheat
});

const mapDispatchToTilesProps =  { onTileClick: tileClick };
Tiles = connect(mapStateToTilesProps, mapDispatchToTilesProps)(Tiles);

export default Tiles