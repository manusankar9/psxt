import './style.css';
import App from './components/ycombinator';
import { Provider } from 'react-redux';
import React from 'react';
import { render } from 'react-dom';
import store from './store-machine';

render(<Provider store={store}>
    <App />
</Provider>, document.getElementById('root'));
