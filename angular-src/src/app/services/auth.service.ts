import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

// for specific link show
import { tokenNotExpired } from 'angular2-jwt';

import 'rxjs/add/operator/map';

@Injectable()

export class AuthService{
	
	authToken: any;
	user: any;


	constructor(
		private http: Http
	){}

	// for registeration
	registerUser(user: any){
		let headers = new Headers();	
		headers.append('ContentType', 'appliction/json');
		let url = 'api/register';
		return this.http.post(url, user, {headers: headers})
			.map(res => res.json());
	}

	// for authentication

	authenticateUser(user: any){
		let headers = new Headers();	
		headers.append('ContentType', 'appliction/json');
		let url = 'api/authenticate';
		return this.http.post(url, user, {headers: headers})
			.map(res => res.json());	
	}

	// builtIn function of angular2-jwt in tokenNotExpired module 
	loggedIn() {
		return tokenNotExpired();
	}


	// for store user token and info localstorage

	storeUserInfo(user:any, token: any){
		localStorage.setItem('token', token);
		localStorage.setItem('user', JSON.stringify(user));
		this.authToken = token;
		this.user = user;
	}

	// for logout

	logoutUser(){
		this.authToken = null;
		this.user = null;
		localStorage.removeItem('token');
		localStorage.removeItem('user');
	}


}