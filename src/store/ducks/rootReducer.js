import { combineReducers } from "redux";

import { reducer as auth } from "./auth";
import { reducer as profile } from "./profile";

const reducers = combineReducers({
	auth,
	profile
});

export default reducers;
