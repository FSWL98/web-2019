import {combineReducers} from "redux";
import * as EventReducer from  "./EventReducer";
import * as FavouriteReducer from  "./FavouriteReducer";
import * as GeoReducer from  "./GeoReducer";
import * as APIReducer from  "./APIReducer";


export const rootReducer = combineReducers({
    events: EventReducer.eventReducer,
    favourites: FavouriteReducer.favouriteReducer,
    geo: GeoReducer.geoReducer,
    api: APIReducer.apiReducer
});

export const initialState = {
    events: EventReducer.initialState,
    favourites: FavouriteReducer.initialState,
    geo: GeoReducer.initialState,
    api: APIReducer.initialState
};

export default rootReducer;
