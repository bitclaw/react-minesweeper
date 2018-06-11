import {TILE_CLICK,RESET_CLICK,RESIZE} from './tilesReducer'


/** INITIAL STATE **/
const GAME_STATE = {
    gameStarted: false,
    gameOver: false,
    gameWon: false,
    time: 0,
    cheat: false
}


/** ACTION CONSTANTS **/
export const TIMER_INCREMENT = 'TIMER_INCREMENT'

/** ASYNC ACTION CREATORS **/
export const timerIncrement = (id, hasMine) => ({type: TIMER_INCREMENT, payload: { id, hasMine }})

/** HELPER FUNCTIONS **/
const isGameWon = (tiles) => {
    const { count, minesCount } = tiles;

    return _.reduce(tiles, (acc, tile) => {
        return (tile.uncovered ? acc + 1 : acc);
    }, 0) === (count - minesCount);
};

/** REDUCER FUNCTION **/
export default (state = initState,action) => {
    switch(action.type) {
        case TIMER_INCREMENT:
            if (!state.gameStarted)
                return state;

            return {
                ...state,
                time: state.time + 1
            };

        case TILE_CLICK: {
            if (state.gameWon || state.gameOver){
                return state;
            }

            //const tiles = tilesReducer(state.tiles, action);
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
            //const tiles = tilesReducer(state.tiles, action);
            return {
                ...GAME_STATE,
                tiles
            };

        }

        case RESIZE: {
            //const tiles = tilesReducer(state.tiles, action);
            return {
                ...GAME_STATE,
                tiles
            }
        }
        default:
            return state;
    }
}