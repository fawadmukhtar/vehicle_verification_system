import { Injectable } from '@angular/core';

@Injectable()

export class ValidateService{

	validateUser(user:any){
		if(user.firstName == undefined || user.lastName == undefined || user.userName == undefined || user.password == undefined){
			return false;
		}else{
			return true;
		}
	}

	validateEmail(email:any){
		let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    	return re.test(email);
	}

	// for login
	validateLogin(user:any){
		if(user.userName == undefined || user.password == undefined){
			return false;
		}else{
			return true;
		}
	}
}