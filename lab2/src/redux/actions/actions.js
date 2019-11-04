export const ADD_NEW_FAVORITE_CITY = 'ADD_NEW_FAVORITE_CITY';
export const REMOVE_FAVORITE_CITY = 'REMOVE_FAVORITE_CITY';
export const ADD_ERROR_MODAL = 'ADD_ERROR_MODAL';
export const UPDATE_GEO_LOCATION = 'UPDATE_GEO_LOCATION';

export const addNewFavoriteCity = name => ({ type: ADD_NEW_FAVORITE_CITY, name: name });
export const removeFavoriteCity = name => ({ type: REMOVE_FAVORITE_CITY, name: name });
export const addErrorModal = errorMessage => ({ type: ADD_ERROR_MODAL, errorMessage: errorMessage });
export const updateGeoLocation = coordinates => ({ type: UPDATE_GEO_LOCATION, coordinates: coordinates });
