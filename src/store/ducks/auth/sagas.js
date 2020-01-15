import { all, put, takeLatest } from "redux-saga/effects";

import { AuthTypes, AuthActions } from ".";

export function* login({ email, password }) {
	yield put(AuthActions.isLoading());
	yield put(
		AuthActions.signInSuccess({
			name: "um usuario legal",
			email: "umemaillegal@email.com",
			token: "umtokenvalido"
		})
	);
}

export function* register({ name, email, password }) {
	yield put(AuthActions.isLoading());
}

export default all([
	takeLatest(AuthTypes.LOGIN_REQUEST, login),
	takeLatest(AuthTypes.REGISTER_REQUEST, register)
]);
