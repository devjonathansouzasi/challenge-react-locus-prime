import axios from "axios";

const baseApi = axios.create({
	baseURL: "http://localhost:3333"
});

const githubApi = axios.create({
	baseURL: "https://api.github.com/"
});

export { baseApi, githubApi };
