import {combineReducers} from "redux";
import * as EventReducer from  "./EventReducer";
import * as FavouriteReducer from  "./FavouriteReducer";
import * as GeoReducer from  "./GeoReducer";


export const rootReducer = combineReducers({
    events: EventReducer.eventReducer,
    favourites: FavouriteReducer.favouriteReducer,
    geo: GeoReducer.geoReducer
});

export const initialState = {
    events: EventReducer.initialState,
    favourites: FavouriteReducer.initialState,
    geo: GeoReducer.initialState
};

export default rootReducer;
