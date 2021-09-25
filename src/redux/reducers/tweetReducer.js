import { LIST_TWEET, POST_TWEET, LIKE_TWEET, RE_TWEET } from '../types/types';
import { Tweets } from '../../tweetsdb';

const initialState = {
    errmess: null,
    tweets: []
}
// console.log(Tweets)
export const tweetReducer = (state = initialState, action) => {
    switch (action.type) {
        case LIST_TWEET:
            console.log(action.payload)
            return { ...state, tweets: action.payload };

        case POST_TWEET:
            return { ...state, tweets: action.payload };

        case LIKE_TWEET:
            return { ...state, tweets: action.payload };

        case RE_TWEET:
            return { ...state, tweets: action.payload };

        default:
            console.log(state)
            return state
    }
}