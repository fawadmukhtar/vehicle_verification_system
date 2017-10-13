import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

// import { NgProgressService } from 'ng2-progressbar';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()

export class VehicleService {

	constructor(private http: Http){}
	// private vehicleUrl = 'http://www.mtmis.excise-punjab.gov.pk/';
	private headers = new Headers({'ContentType': 'application/json'});

	// web scrapping for punjab vehicles
	getVehicle(data:any):Promise<any>{
		let vehicleUrl = `api/punjabScrape/${data}`;
		// request started
		// this.pService.start();
		return this.http.post(vehicleUrl, {headers: this.headers} )
		.toPromise()
		.then(response =>  response)
		.catch(this.handleError);
	}

	getIslamabadVehicle(firstNum:any, lastNum:any):Promise<any>{
		
		let vehicleUrl = `islamVehicle.php?vhlno1=${firstNum}&vhlno2=${lastNum}`;
		return this.http.post(vehicleUrl, {headers: this.headers})
		.toPromise()
		.then(response => response)
		.catch(this.handleError);
	}

	getKpkVehicle(district:any, registered:any, vehicleNumber: any):Promise<any>{
		
		let vehicleUrl = `http://127.0.0.1/kpkVehicle.php?district=${district}&registered=${registered}&vehicleNumber=${vehicleNumber}`;
		return this.http.post(vehicleUrl, {headers: this.headers})
		.toPromise()
		.then(response => response)
		.catch(this.handleError);
	}

	// store punjab vehicle record in database
	savePunjabData(object:any){
		let headers = this.headers;
		let url = 'api/punjabVehicle';
		return this.http.post(url, JSON.parse(JSON.stringify(object || null)), {headers: headers})
			.map(res => res.json());
	}	

	// retrieve punjab vehicles from database
	getPunjabVehicles(id:any){
		let url = `api/punjabVehicles/${id}`;
		return this.http.get(url)
			.map(res => res.json());
	}

	// remove record from database
	deletePunjabVehicle(id:any){
		let url = `api/punjabVehicle/${id}`;
		return this.http.delete(url)
			.map(res => res.json());
	}

	private handleError(error: any): Promise<any> {
	    console.error('An error occurred', error); // for demo purposes only
	    return Promise.reject(error.message || error);
	}
}