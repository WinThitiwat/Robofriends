import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Card from './Card.js';
import * as serviceWorker from './serviceWorker';
import 'tachyons';
import App from './containers/App.js';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux'; 
import {searchRobots} from './reducers';
import {createLogger } from 'redux-logger';

const logger = createLogger();
const store = createStore(searchRobots, applyMiddleware(logger));

ReactDOM.render(
    // provide all states from Redux to Connect components to be aware of Redux existence
    <Provider store={store}> 
         <App />
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
