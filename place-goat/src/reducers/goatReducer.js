import { FETCH_GOATS_SUCCESS, ADD_GOAT, DISPLAY_NEW } from "../actions";
import { goatQuotes } from "../goatQuotes";


const initialState = {
    hasFetched: false,
    goatList: [],
    displayedGoats: [],
    newGoat: {},
    imageURL: "",
    goatQuotes: goatQuotes
}

const reducer = (state = initialState, action) => {

    switch(action.type) {
        
        case FETCH_GOATS_SUCCESS:
            return {
                ...state,
                goatList: [...state.goatList, action.payload],
                hasFetched: true
            }
        case ADD_GOAT:
            return {
                ...state,
                imageURL: action.payload
            }
        case DISPLAY_NEW:
            return {
                ...state,
                newGoat: action.payload,
                displayedGoats: [action.payload, ...state.displayedGoats]
            }
        default:
            return state;
    }
};

export default reducer;