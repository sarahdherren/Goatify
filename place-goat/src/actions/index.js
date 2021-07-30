import axios from 'axios';
export const FETCH_GOATS = "FETCH_GOATS";
export const FETCH_GOATS_SUCCESS = "FETCH_GOATS_SUCCESS";
export const ADD_GOAT = "ADD_GOAT";
export const DISPLAY_NEW = "DISPLAY_NEW";


export const fetchGoats = () => dispatch => {
    dispatch({ type: FETCH_GOATS });
    axios.get('https://api.unsplash.com/search/photos/', {
        params: {
            query: 'goat',
            page: 2,
            per_page: 20
        },
        headers: {
            Authorization: 'Client-ID Kyo6E3yqJD0RdKeynh9dKV1MzDUUWyk5NNCaIDQEccg'
        }
        })
        .then(res => {
           dispatch({type:FETCH_GOATS_SUCCESS, payload:res.data.results }) 
        })    
};


export const addGoat = (goat) => {
    return({type:ADD_GOAT, payload: goat})
};

export const displayNew = (goat) => {
    return({type:DISPLAY_NEW, payload: goat})
};