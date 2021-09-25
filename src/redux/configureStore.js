import { tweetReducer } from "./reducers/tweetReducer";
import { createStore, combineReducers } from "redux";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";

const ConfigureStore = combineReducers({
    tweet: tweetReducer
})


const store = createStore(ConfigureStore, applyMiddleware(thunk));
export default store