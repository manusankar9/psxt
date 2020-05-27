import './style.css';
import { combineReducers, compose, createStore } from 'redux';
import App from './components/ycombinator';
import { Provider } from 'react-redux';
import React from 'react';
import hackerNews from './components/ycombinator/reducer';
import { render } from 'react-dom';

const store = createStore(combineReducers({
    hackerNews
}), compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
));

render(<Provider store={store}>
    <App />
</Provider>, document.getElementById('root'));
