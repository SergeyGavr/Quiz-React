import {FETCH_QUIZES_FAILURE, FETCH_QUIZES_START, FETCH_QUIZES_SUCCESS} from "../actions/actionTypes";

const initialState = {
    quizes: [],
    loading: false,
    error: null
};

export default function quizReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_QUIZES_START:
            return {
                ...state,
                loading: true
            };
        case FETCH_QUIZES_SUCCESS:
            return {
                ...state,
                loading: false,
                quizes: action.quizes
            };
        case FETCH_QUIZES_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        default:
            return state
    }
}