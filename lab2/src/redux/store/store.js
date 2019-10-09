import { createStore } from 'redux';
import {rootReducer, initialState} from '../reducers/index';


const favoritesKeyStorage = "favorites";

const favoritesStorage = localStorage.getItem(favoritesKeyStorage);
let persistedState = initialState;

if (favoritesStorage) {
    persistedState.favourites = JSON.parse(favoritesStorage);
}

export const store = createStore(
    rootReducer,
    persistedState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(()=>{
    localStorage.setItem(favoritesKeyStorage, JSON.stringify(store.getState().favourites))
});

export default store;
