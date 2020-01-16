import { all, put, call, takeLatest } from "redux-saga/effects";

import { baseApi, githubApi } from "~/services/api";
import { showAlert } from "~/services/toasts";

import { ProfileTypes, ProfileActions } from ".";

export function* load({ payload }) {
	try {
		yield put(ProfileActions.isLoading(true));
		const response = yield call(baseApi.get, `users/${payload}/profiles`);
		yield put(ProfileActions.loadProfilesSuccess(response.data));
	} catch (error) {
		showAlert("Erro ao carregar dados do servidor", "error");
	} finally {
		yield put(ProfileActions.isLoading(false));
	}
}

export function* store({ payload }) {
	try {
		const { userId, search, date } = payload;

		const profileExists = yield call(
			baseApi.get,
			`/users/${userId}/profiles?login=${search}`
		);

		if (profileExists.data.length > 0) {
			showAlert("Voce já salvou este perfil antes", "info");
			return;
		}

		const response = yield call(githubApi.get, `/users/${search}`);

		const profile = {
			id: response.data.id,
			login: response.data.login,
			name: response.data.name,
			bio: response.data.bio,
			repos: response.data.public_repos,
			followers: response.data.followers,
			followings: response.data.followings,
			avatarUrl: response.data.avatar_url,
			date
		};

		yield call(baseApi.post, `/users/${userId}/profiles`, profile);

		yield put(ProfileActions.storeProfileSuccess(profile));

		showAlert("Perfil salvo com sucesso", "success");
	} catch (error) {
		showAlert("Erro ao salvar perfil", "error");
	} finally {
		yield put(ProfileActions.isLoading(false));
	}
}

export default all([
	takeLatest(ProfileTypes.LOAD_PROFILES_REQUEST, load),
	takeLatest(ProfileTypes.STORE_PROFILE_REQUEST, store)
]);
