const search = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_SEARCH_RESULT':
            return [
                ...state,
                { data: action.data }
            ];
        default:
            return state;
    }
};

export default search;
