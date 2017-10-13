import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ValidateService } from '../../services/validate.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from '../../services/auth.service';


@Component({
	moduleId: module.id,
	selector: 'user-register',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})

export class LoginComponent {
	
	userName : string;
	password : string;

	constructor(
		private validateService: ValidateService,
		private flashMessagesService: FlashMessagesService,
		private authService: AuthService,
		private router: Router
	){}

	onSubmit(){
		
		const user = {
			userName: this.userName,
			password: this.password 
		};

		if(!this.validateService.validateLogin(user)){
			this.flashMessagesService.show('Please fill in all fields!', 
				{ 
					cssClass: 'alert-danger',
					timeout: 5000
				});
			return false;
		}

		this.authService.authenticateUser(user)
			.subscribe(data => {
				if(data.success){
					this.authService.storeUserInfo(data.user, data.token);
					
					this.flashMessagesService.show('You are logged In!', 
						{
							cssClass: 'alert-success',
							timeout: 5000
						});
					this.router.navigate(['/punjab']);
				}else{
					this.flashMessagesService.show(data.msg, 
						{ 
							cssClass: 'alert-danger',
							timeout: 5000
						});
				}
			});

	}	
}