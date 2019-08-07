import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom'
import './index.css';
import App from './App';
import { createStore, compose, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import rootRecucer from './store/reducers/rootReducer'
import thunk from 'redux-thunk'

import * as serviceWorker from './serviceWorker';

const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        }) : compose;

const store = createStore(
    rootRecucer, composeEnhancers(
        applyMiddleware(thunk)
    ));

const app = (
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>

);

ReactDOM.render(app, document.getElementById('root'));


serviceWorker.unregister();
