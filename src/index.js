import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import './index.css';
import App from './App';
import createAppStore from './store';
import {timerIncrement} from './actions/minesweeper'
import { PersistGate } from 'redux-persist/integration/react'
import registerServiceWorker from './registerServiceWorker';

const { persistor, store } = createAppStore()

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>,
    document.getElementById('root')
);

const int = setInterval(() => {
    store.dispatch(timerIncrement());
}, 1000);

window.onunload = () => {
    clearInterval(int);
};

registerServiceWorker();
