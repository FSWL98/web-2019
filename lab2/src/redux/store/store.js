import { createStore } from 'redux';
import {rootReducer, initialState} from '../reducers/index';

const restoreDataFromLocalStorageByKey = (key) => {
    const storageData = localStorage.getItem(key);

    if (!storageData) {
        return null;
    }

    return JSON.parse(storageData);
};

const favoritesKeyStorage = "favorites";
const geoKeyStore = "geo";

const favorites = restoreDataFromLocalStorageByKey(favoritesKeyStorage);
const geo = restoreDataFromLocalStorageByKey(geoKeyStore);

let persistedState = initialState;

if (favorites) {
    persistedState.favourites = favorites;
}

if (geo) {
    persistedState.geo = geo;
}

export const store = createStore(
    rootReducer,
    persistedState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(()=>{
    localStorage.setItem(favoritesKeyStorage, JSON.stringify(store.getState().favourites));
    localStorage.setItem(geoKeyStore, JSON.stringify(store.getState().geo));
});

export default store;
