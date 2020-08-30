const initialState = {
    category: 'GAME'
};

export default function (state = initialState, action) {
    switch (action.type){
        case 'CHANGE_CATEGORY':
            return {
                ...state,
                category: action.payload
            };
        default:
            return state
    }
}