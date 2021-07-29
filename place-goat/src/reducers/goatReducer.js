import { HAS_FETCHED, FETCH_GOATS_SUCCESS, ADD_GOAT } from "../actions";
//import { DISPLAY_NEW } from "../actions";

const initialState = {
    hasFetched: false,
    goatList: [],
    displayedGoats: [],
    imageURL: "",
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
        // case DISPLAY_NEW:
        //     return {
        //         ...state,
        //         displayedGoats: [action.payload, ...state.displayedGoats]
        //     }
        default:
            return state;
    }
};

export default reducer;