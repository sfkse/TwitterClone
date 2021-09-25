import { LIST_TWEET, ADD_TWEET, LIKE_TWEET, RE_TWEET } from '../types/types';

const baseUrl = 'http://localhost:3001/';

export const fetchTweets = () => async (dispatch) => {
    return await fetch(baseUrl + 'tweets')
        .then(res => res.json())
        .then(data => dispatch(listTweet(data)))
        .catch(err => alert(err))
}

export const listTweet = (data) => {
    // console.log(data)
    return ({
        type: LIST_TWEET,
        payload: data
    })
}

export const postTweet = (content) => async (dispatch) => {

    const newTweet = {
        author: "Sefa",
        username: "@sfkse",
        content: content,
        comment: 5,
        retweet: 3,
        like: 18

    }
    return await fetch(baseUrl + 'tweets', {
        method: 'POST',
        body: JSON.stringify(newTweet),
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'same-origin'
    })
        .then(res => res.json())
        .then(res => dispatch(addTweet(res)))
}

export const addTweet = (tweet) => {
    return ({
        type: ADD_TWEET,
        payload: tweet
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
