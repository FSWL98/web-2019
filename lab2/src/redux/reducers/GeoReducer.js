import {UPDATE_GEO_LOCATION} from "../actions/actions";

export const initialState = {
    coordinates: {},
    wasFirstRequest: false
};

export const geoReducer = (state = initialState, action) => {
    switch(action.type) {
        case UPDATE_GEO_LOCATION:
            return {
                coordinates: action.coordinates,
                wasFirstRequest: true
            };

        default:
            return state;
    }
};

export default geoReducer;
