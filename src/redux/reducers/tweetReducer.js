import { LIST_TWEET, POST_TWEET, LIKE_TWEET, RE_TWEET } from '../types/types';
import { Tweets } from '../../tweetsdb';

const initialState = Tweets
// console.log(Tweets)
export const tweetReducer = (state = initialState, action) => {
    switch (action.type) {
        case LIST_TWEET:
            return { ...state, tweets: action.payload }

        default:
            console.log(state)
            return state
    }
}