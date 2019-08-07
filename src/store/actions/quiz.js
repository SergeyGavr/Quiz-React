import axios from 'axios'
import {FETCH_QUIZES_FAILURE, FETCH_QUIZES_START, FETCH_QUIZES_SUCCESS} from "./actionTypes";

export const fetchQuizes = () => {
    return async dispatch => {
        dispatch(fetchQuizesStart());
        try {
            const response = await axios.get('https://react-quiz-wfm.firebaseio.com/quizes.json');

            const quizes = [];
            Object.keys(response.data).forEach((key, index) => {
                quizes.push({
                    id: key,
                    name: `Тест № ${index + 1}`
                })
            });

            dispatch(fetchQuizesSuccess(quizes));

        } catch (e) {
            dispatch(fetchQuizesFailure(e));
        }
    }
};

export const fetchQuizesStart = () => {
    return {
        type: FETCH_QUIZES_START
    }
};

export const fetchQuizesSuccess = (quizes) => {
    return {
        type: FETCH_QUIZES_SUCCESS,
        quizes
    }
};

export const fetchQuizesFailure = (e) => {
    return {
        type: FETCH_QUIZES_FAILURE,
        error: e
    }
};