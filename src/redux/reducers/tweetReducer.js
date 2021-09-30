import { LIST_TWEET, ADD_TWEET, LIKE_TWEET, RE_TWEET } from '../types/types';

const initialTweets = {
    errmess: null,
    tweets: []
}
// console.log(Tweets)
export const tweetReducer = (state = initialTweets, action) => {
    switch (action.type) {
        case LIST_TWEET:

            return { ...state, tweets: action.payload };

        case ADD_TWEET:
            return { ...state, tweets: state.tweets.concat(action.payload) };

        case LIKE_TWEET:
            return { ...state, tweets: action.payload };

        case RE_TWEET:
            return { ...state, tweets: action.payload };

        default:
            return state
    }
}