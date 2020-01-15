import { all, put, call, takeLatest } from "redux-saga/effects";

import api from "~/services/api";
import { userExists, getUserByEmailAndPassword } from "~/services/auth";
import { getHash } from "~/services/hash";
import { rootHistory } from "~/services/historys";
import { showAlert } from "~/services/toasts";

import { AuthTypes, AuthActions } from ".";

export function* login({ payload }) {
	const { email, password } = payload;
	yield put(AuthActions.isLoading());
	try {
		const user = yield getUserByEmailAndPassword(email, password);
		if (user === null) {
			showAlert("Usuário não encontrado.", "error");
			put(AuthActions.hasError());
			return;
		}

		delete user.password;

		yield put(AuthActions.loginSuccess(user));

		const message = `Bem vindo(a) ${user.name}`;
		showAlert(message, "success");

		rootHistory.replace("/");
	} catch (error) {
		showAlert("Erro ao tentar fazer login. Tente novamente", "error");
	}
}

export function* register({ payload }) {
	const { name, email, password } = payload;
	yield put(AuthActions.isLoading());
	try {
		if (yield userExists(email)) {
			showAlert("O email informado já esta vinculado a uma conta!", "warning");
			put(AuthActions.hasError());
			return;
		}
		const hashedPassword = yield getHash(password);
		yield call(api.post, "users", { name, email, password: hashedPassword });
		yield put(AuthActions.registerSuccess({ name, email }));

		const message = `Conta criada. Bem vindo(a) ${name}`;
		showAlert(message, "success");

		rootHistory.replace("/");
	} catch (error) {
		showAlert("Não foi possivel criar sua conta. Tente novamente", "error");
	}
}

export default all([
	takeLatest(AuthTypes.LOGIN_REQUEST, login),
	takeLatest(AuthTypes.REGISTER_REQUEST, register)
]);
