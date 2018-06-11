import {TILE_CLICK,RESET_CLICK,RESIZE} from './tiles'
import {isGameWon,getTilesInitialState} from '../lib/minesweeper'


/** INITIAL STATE **/
const GAME_STATE = {
    gameStarted: false,
    gameOver: false,
    gameWon: false,
    time: 0,
    tiles: getTilesInitialState(),
    cheat: false
}


/** ACTION CONSTANTS **/
export const TIMER_INCREMENT = 'TIMER_INCREMENT'

/** ASYNC ACTION CREATORS **/
export const timerIncrement = (id, hasMine) => ({type: TIMER_INCREMENT, payload: { id, hasMine }})

/** REDUCER FUNCTION **/
export default (state = GAME_STATE,action) => {
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
            const gameWon = isGameWon(state.tiles);
            const gameEnded = action.payload.hasMine || gameWon;

            return {
                ...state,
                tiles: state.tiles,
                gameStarted: !gameEnded,
                gameOver: !gameWon && gameEnded,
                gameWon
            }
        }

        case RESET_CLICK: {
            //const tiles = tilesReducer(state.tiles, action);
            return {
                ...GAME_STATE,
                tiles: state.tiles
            };

        }

        case RESIZE: {
            //const tiles = tilesReducer(state.tiles, action);
            return {
                ...GAME_STATE,
                tiles: state.tiles
            }
        }
        default:
            return state;
    }
}