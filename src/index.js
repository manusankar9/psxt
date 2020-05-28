import './style.css';
import { Route, Switch } from 'react-router-dom'
import App from './components/ycombinator';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import React from 'react';
import { render } from 'react-dom';
import store from './store-machine';

render(<Provider store={store}>
    <BrowserRouter>
        <main>
            <Switch>
                <Route path='/' component={App}/>
            </Switch>
        </main>
    </BrowserRouter>
</Provider>, document.getElementById('root'));
