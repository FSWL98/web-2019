export const ADD_NEW_FAVORITE_CITY = 'ADD_NEW_FAVORITE_CITY';
export const REMOVE_FAVORITE_CITY = 'REMOVE_FAVORITE_CITY';
export const ADD_ERROR_MODAL = 'ADD_ERROR_MODAL';
export const UPDATE_GEO_LOCATION = 'UPDATE_GEO_LOCATION';

export function addNewFavoriteCity(name) {
    return { type: ADD_NEW_FAVORITE_CITY, name: name };
}

export function removeFavoriteCity(name) {
    return { type: REMOVE_FAVORITE_CITY, name: name };
}

export function addErrorModal(errorMessage) {
    return { type: ADD_ERROR_MODAL, errorMessage: errorMessage };
}

export function updateGeoLocation(coordinates) {
    return { type: UPDATE_GEO_LOCATION, coordinates: coordinates };
}
