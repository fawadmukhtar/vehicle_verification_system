import { Component, OnInit } from '@angular/core';

import { VehicleService } from '../../services/vehicle.service';
import { NgProgressService } from 'ng2-progressbar';

@Component({
	moduleId: module.id,
	selector: 'kpk-vehicle',
	templateUrl: './kpk-vehicle.component.html',
	styleUrls: ['./kpk-vehicle.component.css']
})

export class KpkVehicleComponent implements OnInit{
	
	vehicleNumber = '';
	vehicleDistrict = '';
	vehicleRegistered = 'reg';
	vehicleData:any = '';
	vehicleObject:Object = {} ;
	vehicleArr:any = [];
	lastSearches:any = [];  // for localstorage of recent searches 
	lastSave:any = []; // save record in localstorage

	// flags
	htmlHidden = false;
	isTrue = false;    // its for show records
	checkDate = false; // its for token paid or not
	alertTrue = false; // its for input field is valid or not
	alertRecord = false; // its for return data from server, null or empty or true
	alertExistSave = false; // its for record already save alert
	alertSave = false; // its for record saved successfully alert
	searches = false;  // its for recent searches Div
	alertDelete = false; // its for alert delete record
	storeData = false;  // its for save data in localstorage

	colorClass:string = '';

	colorOptions = ['red','white','gold','black','green','purple','yellow','maroon'
	,'golden','blue','brown','cream','gray','orange','pink','silver'];

	constructor(
		private vehicleService: VehicleService,
		private pService: NgProgressService
	){}

	// call after all intialization complete
	ngOnInit(){
		this.recentSearches(false);
		this.saveData(false);
	}

	onSubmit(){
		
		this.isTrue = false;
		this.alertRecord = false;
		this.alertSave = false;
		this.alertExistSave = false;
		this.alertDelete = false;

		this.vehicleArr = [];

		// check submitted data is valid or not
		let regex = /(([a-zA-z]){1}|([a-zA-z]){2})(\s)(\d){2,4}$/g;

		if(regex.test(this.vehicleNumber)){
			this.pService.start();
			this.alertTrue = false;
			// first check if record is save in saved records if yes then show
			if(this.lastSave){	
				for(let i = 0; i < this.lastSave.length; i++){
					if(this.lastSave[i]['Vehicle Registration Number']
						.toLowerCase() == this.vehicleNumber.toLowerCase()){
						this.vehicleArr.push(this.lastSave[i]);
						this.vehicleColor(this.lastSave[i]['Color']);
						this.isTrue = true;
						this.pService.done();
						return;
					}
				}
			}

			// first check if record is in recent searches then show form here
			if(this.lastSearches){
				for(let i = 0; i < this.lastSearches.length; i++){
					if(this.lastSearches[i]['Vehicle Registration Number']
						.toLowerCase() == this.vehicleNumber.toLowerCase()){
						this.vehicleArr.push(this.lastSearches[i]);
						this.vehicleColor(this.lastSearches[i]['Color']);
						this.isTrue = true;
						this.pService.done();
						return;
					}
				}
			}

			this.vehicleService.getKpkVehicle(this.vehicleDistrict,
				this.vehicleRegistered, this.vehicleNumber)
			.then(response => {
				this.vehicleData = response._body;
				if(response._body == null || response._body == ''){
					this.pService.done();
					this.alertRecord = true;	
				}else{	
					this.pService.done();
					// call function for create object after some delay
					setTimeout(()=> {
						this.createObject();
						this.vehicleColor(this.vehicleObject['Color']);
						this.recentSearches(true, this.vehicleObject);
					}, 5);
				}
			});
		}else{
			this.alertTrue = true;
		}
	}


	createObject(){
		this.vehicleArr = [];
		this.vehicleObject = {};
		let elements: any = document.querySelectorAll('div.display-none-html div'); 	
		elements = Array.from(elements);
		elements.splice(0,2);
		elements.splice(2,1);

		let property:any = [];
		let value:any = [];
		
		for(let i = 0; i < elements.length; i = i+2){
			property.push(elements[i]);
			value.push(elements[i+1]);
		}

		property.splice(8,1);
		value.splice(8,1);

		for(let i = 0; i < property.length; i++){
			this.vehicleObject[property[i].innerText.slice(0,-1).trim()] = value[i].innerText;
		}
		this.vehicleArr.push(this.vehicleObject);
		// enable for DOM
		this.isTrue = true;
	}

	checkTokenPaid(object:{}){
		let tokenPaid = object['TOKEN PAID UPTO'] ;
		let year = new Date().getFullYear();
		let month = new Date().getMonth();
		let tokenPaidArr = tokenPaid.split('-');
		let tokenPaidYear = parseInt(tokenPaidArr[2]);
		if((year <= tokenPaidYear) && ( month <= 5)){
			this.checkDate = true;
		}else{
			this.checkDate = false;
		}
	}

	recentSearches(check:boolean, object?:{}){
		let maxSearches = 10;
		if(check){
			this.searches = true;
			if(window.localStorage.getItem('kpk_last_search')){
				this.lastSearches = [];
				this.lastSearches = JSON.parse(window.localStorage.getItem('kpk_last_search'));
				let objCheck = JSON.stringify(object);
				for(let i = 0; i < this.lastSearches.length; i++){
					if(objCheck == JSON.stringify(this.lastSearches[i])){
						this.lastSearches.splice(i,1);
					}		
				}
				
				this.lastSearches.push(object);
				if(this.lastSearches.length > maxSearches){
					this.lastSearches.splice(0,1);
				}
				window.localStorage.setItem('kpk_last_search', JSON.stringify(this.lastSearches));
			}else{
				this.lastSearches = [];
				this.lastSearches.push(object);
				window.localStorage.setItem('kpk_last_search', JSON.stringify(this.lastSearches));
			}
		}else{
			this.lastSearches = [];
			this.lastSearches = JSON.parse(window.localStorage.getItem('kpk_last_search'));
			if(this.lastSearches){
				this.searches = true;			
			}
		}
	}

	// save data in local storage
	saveData(check:boolean, object?:{}){
		if(check){
			this.storeData = true;
			if(this.lastSave){
				for(let i = 0; i < this.lastSave.length; i++){
					if(JSON.stringify(this.lastSave[i]) == JSON.stringify(object)){
						this.alertExistSave = true;
						return;
					}
				}
			}
			if(window.localStorage.getItem('kpk-store-data')){
				this.lastSave = [];
				this.lastSave = JSON.parse(window.localStorage.getItem('kpk-store-data'));
				let objCheck = JSON.stringify(object);
				
				for(let i = 0; i < this.lastSave.length; i++){
					if(objCheck == JSON.stringify(this.lastSave[i])){
						this.lastSave.splice(i,1);
					}		
				}

				this.lastSave.unshift(object);
				window.localStorage.setItem('kpk-store-data', JSON.stringify(this.lastSave));
			}else{
				this.lastSave = [];
				this.lastSave.unshift(object);
				window.localStorage.setItem('kpk-store-data', JSON.stringify(this.lastSave));
			}
			this.alertSave = true;
		}else{
			this.lastSave = [];
			this.lastSave = JSON.parse(window.localStorage.getItem('kpk-store-data'));
			if(this.lastSave == null || this.lastSave == undefined){
				this.storeData = false;
				return;
			}
			if(this.lastSave.length > 0){
				this.storeData = true;
			}
			else{
				this.storeData = false;
			}
		}
	}

	// when click on record in recent searches or saved record then 
	// this function will display record
	onSearch(object:{}){
		this.alertSave = false;
		this.alertDelete = false;
		this.alertExistSave = false;
		this.vehicleArr = [];
		this.vehicleArr.push(object);
		// this.forDateColor(object);
		this.isTrue = true;
		this.vehicleColor(object['Color']);
	}

	// its for delte record from saved records
	deleteSave(object:{}){
		let objectCheck = {};
		objectCheck = JSON.stringify(object);
		for(let i = 0; i < this.lastSave.length; i++){
			if(objectCheck == JSON.stringify(this.lastSave[i])){
				this.lastSave.splice(i,1);
				window.localStorage.setItem('kpk-store-data', JSON.stringify(this.lastSave));
			}
		}

		this.alertDelete = true;
		if(this.lastSave.length < 1){
			this.storeData = false;
		}
	}

	vehicleColor(color:string){
		console.log(color);
		let colorArr = color.split(" ");
		let secondClr = '';
		let firstClr = colorArr[0].toLowerCase();
		if(colorArr.length > 1){
			secondClr = colorArr[1].toLowerCase();	
		}

		for(let clr of this.colorOptions){
			if(clr == firstClr){
				this.colorClass = firstClr;
			}
			if(colorArr.length > 1){
				if(clr == secondClr){
					this.colorClass = secondClr;
				}		
			}
			
		}
	}
}