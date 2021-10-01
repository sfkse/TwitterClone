import { LIST_TWEET, ADD_TWEET, LIST_FEED, LIST_FOLLOW, ADD_INTERACTIONS, ADD_COMMENT, ADD_RETWEET } from '../types/types';

// const baseUrl = 'https://my-json-server.typicode.com/sfkse/twitterdb/';
const baseUrl = 'http://localhost:3001/';


// TWEETS SECTION
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
        comment: 0,
        retweet: 0,
        like: 0

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
        .catch(err => alert(err))
}

export const addTweet = (tweet) => {
    return ({
        type: ADD_TWEET,
        payload: tweet
    })
}
export const addInteraction = (tweets, type, id) => async (dispatch) => {

    return await fetch(baseUrl + `tweets/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ ...tweets, retweet: tweets.retweet + 1 }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.json())
        .then(res => dispatch(listTweet(res)))
    // .then(interact => dispatch(addRetweet(interact)))


}

export const addRetweet = (tweets) => {
    console.log(tweets)

    return {
        type: ADD_RETWEET,
        payload: tweets
    }
}
// FEED SECTION
export const fetchFeed = () => async (dispatch) => {
    return await fetch(baseUrl + 'feeds')
        .then(res => res.json())
        .then(data => dispatch(listFeed(data)))
        .catch(err => alert(err))
}

export const listFeed = (feeds) => {
    return ({
        type: LIST_FEED,
        payload: feeds
    })
}

export const fetchFollow = () => async (dispatch) => {
    return await fetch(baseUrl + 'follow')
        .then(res => res.json())
        .then(data => dispatch(listFollow(data)))
        .catch(err => alert(err))
}

export const listFollow = (data) => {
    return {
        type: LIST_FOLLOW,
        payload: data
    }
}