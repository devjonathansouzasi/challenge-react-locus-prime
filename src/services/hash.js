import bcrypt from "bcryptjs";

export async function getHash(value) {
	return bcrypt.hash(value, 10);
}

export function compareHash(value, hash) {
	return bcrypt.compareSync(value, hash);
}
