import { LIST_FOLLOW } from '../types/types';

const initialState = {
    follow: []
}
export const followReducer = (state = initialState, action) => {
    switch (action.type) {
        case LIST_FOLLOW:
            return { ...state, follow: action.payload };

        default:
            return state
    }
}