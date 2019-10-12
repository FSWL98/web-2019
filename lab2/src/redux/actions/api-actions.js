export const API_GET_WEATHER_BY_CITY_NAME_REQUEST = "API_GET_WEATHER_BY_CITY_NAME_REQUEST";
export const API_GET_WEATHER_BY_CITY_NAME_RECEIVED = "API_GET_WEATHER_BY_CITY_NAME_RECEIVED";
export const API_GET_WEATHER_BY_CITY_COORDINATES_REQUEST = "API_GET_WEATHER_BY_CITY_COORDINATES_REQUEST";
export const API_GET_WEATHER_BY_CITY_COORDINATES_RECEIVED = "API_GET_WEATHER_BY_CITY_COORDINATES_RECEIVED";
export const API_ADD_COMPONENT_ID_TO_API = "API_ADD_COMPONENT_ID_TO_API";

export const addComponentIDTOApi = (componentID) => ({type: API_ADD_COMPONENT_ID_TO_API, componentID: componentID});

export const getWeatherByCityName = (cityname, fromID) => (
    { type: API_GET_WEATHER_BY_CITY_NAME_REQUEST, cityname: cityname, fromID: fromID });
export const getWeatherByCityCoordinates = (coordinates, fromID) => (
    {type: API_GET_WEATHER_BY_CITY_COORDINATES_REQUEST, coordinates: coordinates, fromID: fromID });
