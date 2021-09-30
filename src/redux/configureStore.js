import { tweetReducer } from "./reducers/tweetReducer";
import { feedReducer } from "./reducers/feedReducer"
import { followReducer } from "./reducers/followReducer"
import { createStore, combineReducers } from "redux";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";

const ConfigureStore = combineReducers({
    tweet: tweetReducer,
    feeds: feedReducer,
    follow: followReducer
})


const store = createStore(ConfigureStore, applyMiddleware(thunk));
export default store