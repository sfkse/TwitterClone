import { tweetReducer } from "./reducers/tweetReducer";
import { createStore, combineReducers } from "redux";

const ConfigureStore = combineReducers({
    tweet: tweetReducer
})

const store = createStore(ConfigureStore);
export default store