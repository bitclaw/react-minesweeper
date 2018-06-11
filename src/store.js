import {createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import reducer from './reducers/minesweeper'

let store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
);

if (process.env.DISABLE_DEV_TOOLS) {
    store = createStore(
        reducer,
        applyMiddleware(thunk)
    )
}

export default store