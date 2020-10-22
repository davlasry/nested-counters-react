import React from 'react';
import './index.css';
import App from './App.jsx';
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {combineReducers, createStore} from 'redux'
import {nodesReducer} from './reducers/index'

const store = createStore(combineReducers({nodesReducer}))

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
)
