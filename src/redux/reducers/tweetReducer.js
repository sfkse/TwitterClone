import { LIST_TWEET, ADD_TWEET, ADD_COMMENT, ADD_RETWEET, ADD_LIKE } from '../types/types';

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

        case ADD_COMMENT:
            return { ...state, tweets: action.payload };

        case ADD_RETWEET:
            return { ...state, tweets: action.payload };

        case ADD_LIKE:
            return { ...state, tweets: action.payload };


        default:
            return state
    }
}