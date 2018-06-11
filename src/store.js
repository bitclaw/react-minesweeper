import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { createStore, applyMiddleware } from 'redux';
import gameReducer from './reducers/minesweeper'
import promise from 'redux-promise';
import thunk from 'redux-thunk';

const config = {
    key: 'root',
    storage,
};

let middleware = [thunk];
const reducer = persistReducer(config, gameReducer);
const createAppStore = () => {
    const store = createStore(reducer, composeWithDevTools(applyMiddleware(...middleware, promise)));
    let persistor = persistStore(store);

    return { persistor, store }
};

export default createAppStore;