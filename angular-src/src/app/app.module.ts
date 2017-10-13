import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// loading custom module
import { VehicleRoutingModule } from './modules/vehicle-routing/vehicle-routing.module';  

// loading component
import { AppComponent } from './app.component';
import { VehicleComponent } from './components/vehicle/vehicle.component';
import { IslamVehicleComponent } from './components/islam-vehicle/islam-vehicle.component';
import { KpkVehicleComponent } from './components/kpk-vehicle/kpk-vehicle.component';
import { SindhVehicleComponent } from './components/sindh-vehicle/sindh-vehicle.component';

// loading authentication components
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';

// loading Services
import { VehicleService } from './services/vehicle.service';
import { AuthService } from './services/auth.service';
import { ValidateService } from './services/validate.service';


import { VehiclePipe } from './pipes/vehicle.pipe';
import { ReversePipe } from './pipes/reverse.pipe';
import { CapitalizePipe } from './pipes/capitalize.pipe';

import { NgProgressModule } from 'ng2-progressbar';
import { FlashMessagesModule } from 'angular2-flash-messages';

@NgModule({

	imports: [ 
		BrowserModule,
		FormsModule,
		HttpModule,
		NgProgressModule,
		VehicleRoutingModule,
		FlashMessagesModule
	],
	
	declarations : [ 
		AppComponent,
		VehicleComponent,
		KpkVehicleComponent,
		SindhVehicleComponent,
		VehiclePipe,
		IslamVehicleComponent,
		RegisterComponent,
		LoginComponent,	
		ReversePipe,
		CapitalizePipe

	],

	providers: [ 
		VehicleService,
		ValidateService,
		AuthService
	],

	bootstrap: [ AppComponent ]
})
export class AppModule { }