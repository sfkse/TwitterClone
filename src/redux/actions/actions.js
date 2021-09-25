import { LIST_TWEET, POST_TWEET, LIKE_TWEET, RE_TWEET } from '../types/types';
import { Tweets } from '../../tweetsdb';

export const listTweet = () => {
    return ({
        type: LIST_TWEET,
        payload: Tweets
    })
}

export const postTWeet = () => {
    return ({
        type: POST_TWEET
    })
}
export const likeTWeet = () => {
    return ({
        type: LIKE_TWEET
    })
}
export const reTWeet = () => {
    return ({
        type: RE_TWEET
    })
}
