import { all } from "redux-saga/effects";

import auth from "./auth/sagas";
import profile from "./profile/sagas";

export default function* rootSaga() {
	yield all([auth, profile]);
}
