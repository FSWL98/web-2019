import { put, takeEvery, all, fork } from 'redux-saga/effects';
import {getWeatherInfoByCoordinates, getWeatherInfoByName} from "../utils/OpenWeatherAPI";
import {
    API_GET_WEATHER_BY_CITY_COORDINATES_REQUEST,
    API_GET_WEATHER_BY_CITY_COORDINATES_RECEIVED,
    API_GET_WEATHER_BY_CITY_NAME_REQUEST,
    API_GET_WEATHER_BY_CITY_NAME_RECEIVED
} from "../redux/actions/api-actions";


function* fetchWeatherByCityCoordinates(action) {
    const {coordinates: {
        lat, lon
    }, fromID} = action;
    const answer = yield getWeatherInfoByCoordinates(lat, lon);

    yield put({ type: API_GET_WEATHER_BY_CITY_COORDINATES_RECEIVED, state: answer, fromID: fromID });
}

function* fetchWeatherByCityName(action) {
    const {cityname, fromID} = action;
    const answer = yield getWeatherInfoByName(cityname);

    yield put({ type: API_GET_WEATHER_BY_CITY_NAME_RECEIVED, state: answer, fromID: fromID  });
}

function* getWeatherByCityCoordinates() {
    yield takeEvery(API_GET_WEATHER_BY_CITY_COORDINATES_REQUEST, fetchWeatherByCityCoordinates);
}


function* getWeatherByCityName() {
    yield takeEvery(API_GET_WEATHER_BY_CITY_NAME_REQUEST, fetchWeatherByCityName)
}


export default function* APIWatcher() {
    yield all([
        fork(getWeatherByCityName),
        fork(getWeatherByCityCoordinates)
    ])
}
