import {getTilesInitialState,uncoverTile,isGameWon} from '../actions/minesweeper'

const GAME_STATE = {
    gameStarted: false,
    gameOver: false,
    gameWon: false,
    time: 0,
    tiles: getTilesInitialState(),
    cheat: false
};

/** ACTION CONSTANTS **/
export const TILE_CLICK = 'TILE_CLICK'
export const RESET_CLICK = 'RESET_CLICK'
export const TIMER_INCREMENT = 'TIMER_INCREMENT'

const tilesReducer = (state, action) => {
    switch(action.type) {
        case TILE_CLICK:
            const { id } = action.payload;
            return uncoverTile({ ...state }, id);

        case RESET_CLICK:
            return getTilesInitialState(state.count, state.minesCount);

        default:
            return state;
    }
};

const game = (state = GAME_STATE, action) => {
    switch(action.type) {
        case TIMER_INCREMENT:
            if (!state.gameStarted)
                return state;

            return {
                ...state,
                time: state.time + 1
            };

        case TILE_CLICK: {
            if (state.gameWon || state.gameOver) return state;

            const tiles = tilesReducer(state.tiles, action);
            const gameWon = isGameWon(tiles);
            const gameEnded = action.payload.hasMine || gameWon;

            return {
                ...state,
                tiles,
                gameStarted: !gameEnded,
                gameOver: !gameWon && gameEnded,
                gameWon
            }
        }

        case RESET_CLICK: {
            const tiles = tilesReducer(state.tiles, action);
            return {
                ...GAME_STATE,
                tiles
            };

        }

        default:
            return state;
    }
};

export default game