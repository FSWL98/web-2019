import {combineReducers} from "redux";
import * as EventReducer from  "./EventReducer";
import * as FavouriteReducer from  "./FavouriteReducer";


export const rootReducer = combineReducers({
    events: EventReducer.eventReducer,
    favourites: FavouriteReducer.favouriteReducer
});

export const initialState = {
    events: EventReducer.initialState,
    favourites: FavouriteReducer.initialState
};

export default rootReducer;
