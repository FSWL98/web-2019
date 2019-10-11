import {ADD_ERROR_MODAL} from "../actions/actions";

export const initialState = {
    event: {}
};

export const eventReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_ERROR_MODAL:
            return {
                event: {
                    errorMessage: action.errorMessage
                }
            };

        default:
            return state;
    }
};

export default eventReducer;
