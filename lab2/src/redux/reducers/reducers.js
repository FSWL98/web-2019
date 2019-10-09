import { ADD_NEW_FAVORITE_CITY, REMOVE_FAVORITE_CITY } from '../actions/actions';



function rootReducer(state, action) {
    switch(action.type) {
        case ADD_NEW_FAVORITE_CITY:
            if (state.cities.find((el) => el.name === action.name)) {
                return state;
            }

            return {
                cities: [
                    ...state.cities,
                    {
                        name: action.name
                    }
                ]
            };
        case REMOVE_FAVORITE_CITY:
            console.log(state.cities.filter((city, index) => index !== action.id));
            return {
                cities: state.cities.filter((city, index) => city.name !== action.name)
            };

        default:
            return state;
    }
}

export default rootReducer;
