export const ADD_NEW_FAVORITE_CITY = 'ADD_NEW_FAVORITE_CITY';
export const REMOVE_FAVORITE_CITY = 'REMOVE_FAVORITE_CITY';

export function addNewFavoriteCity(name) {
    return { type: ADD_NEW_FAVORITE_CITY, name: name };
}

export function removeFavoriteCity(name) {
    return { type: REMOVE_FAVORITE_CITY, name: name };
}
