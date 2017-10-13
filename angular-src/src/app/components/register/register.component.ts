import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ValidateService } from '../../services/validate.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from '../../services/auth.service';



@Component({
	moduleId: module.id,
	selector: 'user-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.css']
})

export class RegisterComponent {
	
	firstName: string;
	lastName: string;
	userName: string;
	password: string;
	email:    string;	


	constructor(
		private validateService: ValidateService,
		private flashMessagesService: FlashMessagesService,
		private authService: AuthService,
		private router: Router
	){}


	onSubmit(){
		
		let user = { 
			firstName: this.firstName,
			lastName: this.lastName,
			userName: this.userName,
			password: this.password,
			email: this.email
		};

		// check for validation
		if(!this.validateService.validateUser(user)){
			this.flashMessagesService.show('Please fill in all fields!', { cssClass: 'alert-danger', timeout: 3000});
			return false;
		}

		// check for email valid format
		if(!this.validateService.validateEmail(user.email)){
			this.flashMessagesService.show('Please use valid Email!', { cssClass: 'alert-danger', timeout: 3000 });
			return false;
		}
		
		this.authService.registerUser(user)
			.subscribe(data => {
				if(data.success){
					this.flashMessagesService.show(user.firstName+ ' you are registerd and can login now!', { cssClass: 'alert-success', timeout: 3000 });
					this.router.navigate(['/login']);
				}else{
					this.flashMessagesService.show(user.firstName+ '! something went wrong please try again', { cssClass: 'alert-danger', timeout: 3000 });
					this.router.navigate(['/register']);
				}
			});

	}	
}