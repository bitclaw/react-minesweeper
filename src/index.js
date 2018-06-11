import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import './index.css';
import App from './App';
import store from './store'
import {timerIncrement} from './actions/minesweeper'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store={store}>
        <App />
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
