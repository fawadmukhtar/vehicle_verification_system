import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ValidateService } from './services/validate.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from './services/auth.service';


@Component({
    moduleId: module.id,
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent{
    isIn = false;   // store state
    
    constructor(
        private validateService: ValidateService,
        private flashMessagesService: FlashMessagesService,
        private authService: AuthService,
        private router: Router
    ){}

    toggleState() { // click handler
        let bool = this.isIn;
        this.isIn = bool === false ? true : false; 
    }        

    onLogout(){
        this.authService.logoutUser();
        this.flashMessagesService.show('You are logged out!',
            {
                cssClass: 'alert-success',
                timeOut: 5000
            }
        );
        this.router.navigate(['/punjab']);
        return false;
    }

}    