import { combineReducers } from "redux";

import posts from "./posts";
import category from "./category";

const rootReducers = combineReducers({
    posts,
    category,
})

export default rootReducers;