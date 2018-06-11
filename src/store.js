import {createStore, applyMiddleware, combineReducers} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import gameReducer from './reducers/game'
import tilesReducer from './reducers/tiles'

const reducer = combineReducers({
    game: gameReducer,
    tilesReducer: tilesReducer
})

export default createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
)