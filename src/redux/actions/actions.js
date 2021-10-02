import { LIST_TWEET, ADD_TWEET, LIST_FEED, LIST_FOLLOW } from '../types/types';

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
        retweeted: false,
        liked: false,
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

    if (type === "retweet")
        dispatch(chooseInteraction(tweets, "retweet", "retweeted", id))

    else if (type === "like")
        dispatch(chooseInteraction(tweets, "like", "liked", id))

}

const chooseInteraction = (tweets, type, interact, id) => async (dispatch) => {

    return await fetch(baseUrl + `tweets/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            ...tweets,
            [interact]: !tweets[interact],
            [type]: tweets[interact] === false && tweets[type] >= 0 ? tweets[type] + 1
                : tweets[interact] === true && tweets[type] > 0 ? tweets[type] - 1
                    : tweets[type]

        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.json())
        .then(() => dispatch(fetchTweets()))
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