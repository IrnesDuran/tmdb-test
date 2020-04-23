export const actionTypes = {
    SET_TO_MOVIE: 'SET_TO_MOVIE',
    SET_TO_TV:'SET_TO_TV',
    SET_SEARCHFIELD: 'SET_SEARCHFIELD'
};


const INITIAL_STATE = {
    category: 'tv',
    searchField:''
};



const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.SET_TO_MOVIE:
            return {...state,
                category: 'movie'
            };
        case actionTypes.SET_TO_TV:
            return {...state,
                category: 'tv'
            };
        case actionTypes.SET_SEARCHFIELD:
            return {...state,
                searchField: action.text
            }; 
        default:
            return state;
    }
};

export default reducer;

