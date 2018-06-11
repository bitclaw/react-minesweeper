import {uncoverTile,getTilesInitialState} from '../lib/minesweeper'

import {TIMER_INCREMENT} from "./game";

/** INITIAL STATE **/
const initState = {
    tiles: getTilesInitialState()
}

/** ACTION CONSTANTS **/
export const TILE_CLICK = 'TILE_CLICK'
export const RESET_CLICK = 'RESET_CLICK'
export const RESIZE = 'RESIZE'

/** ASYNC ACTION CREATORS **/
export const tileClick = (id, hasMine) => ({type: TILE_CLICK, payload: { id, hasMine }})
export const resetClick = () => ({type: RESET_CLICK, payload: {}})
export const resize = (id, hasMine) => ({type: TIMER_INCREMENT, payload: { id, hasMine }})

/** REDUCER FUNCTION **/
export default (state = initState,action) => {
    switch(action.type) {
        case TILE_CLICK:
            const { id } = action.payload;
            return uncoverTile({ ...state }, id);

        case RESET_CLICK:
            return getTilesInitialState(state.count, state.minesCount);

        case RESIZE:
            const { newSize } = action.payload;
            return getTilesInitialState(
                newSize,
                parseInt(newSize / 10)
            );

        default:
            return state;
    }
}