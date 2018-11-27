import axios from 'axios';
import token from "./token"

var axiosToken = axios.create({	headers: { Authorization: token.code } });
const E500 = "Please check your internet connection and try again.";
const E404 = "This page is not available, please contact to administrator.";

export default class Connection {
	constructor() {
		this._sender = [axios, axiosToken];
		this._authen = 0;
	}
	
	static createClass() {
		if(this.Con == undefined)
			this.Con = new Connection();
		return this.Con;
	}

	get(url, authen) {
		this.authen = authen;
		return new Promise((resolve, reject) => {
			this._sender[this._authen].get(url)
			.then(res => {
				if(this.isResErr(res))
					reject(E404)
				else
					resolve(res.data)
			}).catch(err => {
				reject(this.handleErr(err))
			});
		});
	}

	post(url, data, authen) {
		this.authen = authen;
		return new Promise((resolve, reject) => {
			this._sender[this._authen].post(url, data)
			.then(res => {
				if(this.isResErr(res))
					reject(E404)
				else
					resolve(res.data)
			}).catch(err => {
				reject(this.handleErr(err))
			});
		});
	}

	isResErr(res) {
		if(typeof(res.data) == "object")
			return false;
		else
			return true;
	}

	handleErr(err) {
		if(err == "Error: Request failed with status code 401" && token.isLogin) {
				token.destroy();
				window.location = '/login';
		} else if(err == "Error: Request failed with status code 500") {
				return E500;
		} else {
				return E404;
		}
	}

	set authen(bool) {
		this._authen = bool ? 1 : 0;
	}
}