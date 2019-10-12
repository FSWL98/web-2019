import { createStore, applyMiddleware } from 'redux';
import {rootReducer, initialState} from '../reducers/index';
import APIWatcher from "../../sagas";
import createSagaMiddleware from 'redux-saga';

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

const APIMiddleware = createSagaMiddleware();

export const store = createStore(
    rootReducer,
    persistedState,
    applyMiddleware(APIMiddleware)
);
APIMiddleware.run(APIWatcher);

store.subscribe(()=>{
    localStorage.setItem(favoritesKeyStorage, JSON.stringify(store.getState().favourites));
    localStorage.setItem(geoKeyStore, JSON.stringify(store.getState().geo));
});

export default store;
