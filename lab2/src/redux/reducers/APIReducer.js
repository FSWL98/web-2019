import {
    API_GET_WEATHER_BY_CITY_COORDINATES_RECEIVED,
    API_GET_WEATHER_BY_CITY_NAME_RECEIVED,
    API_ADD_COMPONENT_ID_TO_API
} from "../actions/api-actions";

export const initialState = {};

export const apiReducer = (state = initialState, action) => {
    switch(action.type) {
        case API_GET_WEATHER_BY_CITY_COORDINATES_RECEIVED:
        case API_GET_WEATHER_BY_CITY_NAME_RECEIVED:
            const {fromID} = action;

            state[fromID] = {
                status: action.state.status,
                message: action.state.message,
                weather: action.state.weather
            };

            return {
                ...state
            };
        case API_ADD_COMPONENT_ID_TO_API:
            if (!state[action.componentID]) {
                return {
                    ...state,
                    [action.componentID]: {}
                }
            }

            return state;

        default:
            return state;
    }
};

export default apiReducer;
