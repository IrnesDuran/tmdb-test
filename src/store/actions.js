import {actionTypes} from './reducers';

export const setToMovie = () => ({
    type: actionTypes.SET_TO_MOVIE,
});

export const setToTv = () => ({
    type: actionTypes.SET_TO_TV,
});

export const setSearchField = (text) => ({
    type: actionTypes.SET_SEARCHFIELD,
    payload: text
});

