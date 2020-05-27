import './style.css';
import { combineReducers, compose, createStore } from 'redux';
import hackerNews from './components/ycombinator/reducer';

const createStoreFactory = () => {

    return createStore(combineReducers({
        hackerNews
    }), compose(
        window.devToolsExtension ? window.devToolsExtension() : f => {

            return f;

        }
    ));

};

const store = createStoreFactory();

export default store;
