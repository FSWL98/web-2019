import { createStore } from 'redux';
import rootReducer from '../reducers/reducers';

const initialState = {
    cities: []
};

const persistedState = localStorage.getItem('reduxState') ?
    JSON.parse(localStorage.getItem('reduxState')) : initialState;

export default createStore(
    rootReducer,
    persistedState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
