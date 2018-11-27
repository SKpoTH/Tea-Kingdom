export default class Token {
	static set code(newtoken) {
		localStorage.setItem('token', newtoken);
	}

	static get code() {
		return localStorage.getItem("token");
	}

	static get isLogin() {
		return localStorage.getItem("token") != undefined;
	}

	static destroy() {
		localStorage.clear();
	}
}