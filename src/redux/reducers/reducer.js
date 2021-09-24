import { LIST_TWEET, POST_TWEET, LIKE_TWEET, RE_TWEET } from '../types/types';

export const reducer = (state, action) => {
    switch (action.type) {
        case LIST_TWEET:
            return { ...state, tweets: action.payload }

        default:
            return state
    }
}