import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from '../../app.component';
import { VehicleComponent } from '../../components/vehicle/vehicle.component';
import { IslamVehicleComponent } from '../../components/islam-vehicle/islam-vehicle.component';
import { KpkVehicleComponent } from '../../components/kpk-vehicle/kpk-vehicle.component';
import { SindhVehicleComponent } from '../../components/sindh-vehicle/sindh-vehicle.component';

// loading authentication components
import { RegisterComponent } from '../../components/register/register.component';
import { LoginComponent } from '../../components/login/login.component';

const routes: Routes = [
	// { path: '', component: AppComponent },
	{ path: '', redirectTo: '/punjab', pathMatch: 'full'},
	{ path: 'punjab', component: VehicleComponent },
	{ path: 'islamabad', component: IslamVehicleComponent },
	{ path: 'kpk', component: KpkVehicleComponent },
	{ path: 'sindh', component: SindhVehicleComponent },
	{ path: 'register', component: RegisterComponent },
	{ path: 'login', component: LoginComponent }
];

@NgModule({
	imports: [ 
		RouterModule.forRoot(routes)
	],
	exports: [
		RouterModule
	]

})

export class VehicleRoutingModule{

}