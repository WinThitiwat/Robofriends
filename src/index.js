import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Card from './Card.js';
import * as serviceWorker from './serviceWorker';
import 'tachyons';
import App from './containers/App.js';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, combineReducers} from 'redux'; // 
import {searchRobots, requestRobots} from './reducers'; // for Store
import {createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

const logger = createLogger();

const rootReducer = combineReducers({searchRobots, requestRobots})

// searchRobots is rootReducer
// applyMiddleware tells what's going in the app when actions happen
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware,logger));

ReactDOM.render(
    // provide Store (all states that is source of all true) from Redux to Connect components to be aware of Redux existence
    <Provider store={store}> 
         <App />
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
