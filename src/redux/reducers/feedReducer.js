import { LIST_FEED } from "../types/types";

const initialFeeds = {
    feeds: []
}
export const feedReducer = (state = initialFeeds, action) => {

    switch (action.type) {
        case LIST_FEED:
            return { ...state, feeds: action.payload }

        default:
            return state
    }

}


