import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import App from './containers/App';
import { Provider } from 'react-redux';
import configureStore from './stores/configureStore';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);