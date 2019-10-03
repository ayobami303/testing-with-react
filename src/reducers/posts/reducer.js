import { types } from "../../actions/types";

const initialState = [];

export const postsReducer = (state = initialState, action) => {
    switch(action.type){
        case types.GET_POSTS:
            return action.payload;
        default:
            return state;
    }
};