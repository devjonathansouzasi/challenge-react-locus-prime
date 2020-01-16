import { baseApi } from "./api";
import { compareHash } from "./hash";

export async function userExists(email) {
	const response = await baseApi.get(`users?email=${email}`);
	return response.data.length > 0;
}
export async function getUserByEmailAndPassword(email, password) {
	const response = await baseApi.get(`users?email=${email}`);
	if (response.data.length === 0) {
		return null;
	}

	const user = response.data[0];

	const match = compareHash(password, user.password);

	return match ? user : null;
}
