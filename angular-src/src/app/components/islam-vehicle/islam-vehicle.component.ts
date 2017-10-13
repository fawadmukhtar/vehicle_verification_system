import { Component, OnInit } from '@angular/core';

import { VehicleService } from '../../services/vehicle.service';
import { NgProgressService } from 'ng2-progressbar';

@Component({
	moduleId: module.id,
	selector: 'islam-vehicle',
	templateUrl: './islam-vehicle.component.html',
	styleUrls: ['./islam-vehicle.component.css']
})

export class IslamVehicleComponent implements OnInit{
	
	vehicleNumber = '';
	vehicleData:any = '';
	vehicleObject:Object = {} ;
	vehicleArr:any = [];
	lastSearches:any = [];  // for localstorage of recent searches 
	lastSave:any = []; // save record in localstorage

	// flags
	isTrue = false;    // its for show records
	checkDate = false; // its for token paid or not
	alertTrue = false; // its for input field is valid or not
	alertRecord = false; // its for return data from server, null or empty or true
	alertExistSave = false; // its for record already save alert
	alertSave = false; // its for record saved successfully alert
	searches = false;  // its for recent searches Div
	alertDelete = false; // its for alert delete record
	storeData = false;  // its for save data in localstorage



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

		// its for match with object property value
		let checkVehcileNum:any = this.vehicleNumber;
		checkVehcileNum = checkVehcileNum.split(' ');
		checkVehcileNum = checkVehcileNum[0]+'-'+checkVehcileNum[1];

		let VehicleNum = this.vehicleNumber.split(' ');
		let firstVehicleNum = VehicleNum[0];
		let lastVehicleNum = VehicleNum[1];

		// check submitted data is valid or not
		let regex = /(([a-zA-z]){3}|([a-zA-z]){2})(\s)(\d){3,4}$/g;

		if(regex.test(this.vehicleNumber)){
			this.pService.start();
			this.alertTrue = false;
			// first check if record is save in saved records if yes then show
			if(this.lastSave){	
				for(let i = 0; i < this.lastSave.length; i++){
					if(this.lastSave[i]['REGISTRATION                         NO']
						.toLowerCase() == checkVehcileNum.toLowerCase()){
						this.vehicleArr.push(this.lastSave[i]);
						this.isTrue = true;
						this.pService.done();
						return;
					}
				}
			}

			// // first check if record is in recent searches then show form here
			if(this.lastSearches){
				for(let i = 0; i < this.lastSearches.length; i++){
					if(this.lastSearches[i]['REGISTRATION                         NO']
						.toLowerCase() == checkVehcileNum.toLowerCase()){
						this.vehicleArr.push(this.lastSearches[i]);
						this.isTrue = true;
						this.pService.done();
						return;
					}
				}
			}

			this.vehicleService.getIslamabadVehicle(firstVehicleNum, lastVehicleNum)
			.then(response => {
				this.vehicleData = response._body;
				if(response._body == null || response._body == ''){
					this.pService.done();
					this.alertRecord = true;	
				}else{	
					this.pService.done();
					// call function for create object after some delay
					setTimeout(()=> {
						this.createObject()
						this.checkTokenPaid(this.vehicleObject);
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
		let property:any = document.querySelectorAll('div.record-row div');
	
		let value:any = document.querySelectorAll('div.record-row font font');
		
		for(let i = 0; i < property.length; i++){
			this.vehicleObject[property[i].innerText.slice(0,-2).trim()] = value[i].innerText;
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
			if(window.localStorage.getItem('islamabad_last_search')){
				this.lastSearches = [];
				this.lastSearches = JSON.parse(window.localStorage.getItem('islamabad_last_search'));
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
				window.localStorage.setItem('islamabad_last_search', JSON.stringify(this.lastSearches));
			}else{
				this.lastSearches = [];
				this.lastSearches.push(object);
				window.localStorage.setItem('islamabad_last_search', JSON.stringify(this.lastSearches));
			}
		}else{
			this.lastSearches = [];
			this.lastSearches = JSON.parse(window.localStorage.getItem('islamabad_last_search'));
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
			if(window.localStorage.getItem('islamabad-store-data')){
				this.lastSave = [];
				this.lastSave = JSON.parse(window.localStorage.getItem('islamabad-store-data'));
				let objCheck = JSON.stringify(object);
				
				for(let i = 0; i < this.lastSave.length; i++){
					if(objCheck == JSON.stringify(this.lastSave[i])){
						this.lastSave.splice(i,1);
					}		
				}

				this.lastSave.unshift(object);
				window.localStorage.setItem('islamabad-store-data', JSON.stringify(this.lastSave));
			}else{
				this.lastSave = [];
				this.lastSave.unshift(object);
				window.localStorage.setItem('islamabad-store-data', JSON.stringify(this.lastSave));
			}
			this.alertSave = true;
		}else{
			this.lastSave = [];
			this.lastSave = JSON.parse(window.localStorage.getItem('islamabad-store-data'));
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
		// this.vehicleColor(this.vehColor);
	}

	// its for delte record from saved records
	deleteSave(object:{}){
		let objectCheck = {};
		objectCheck = JSON.stringify(object);
		for(let i = 0; i < this.lastSave.length; i++){
			if(objectCheck == JSON.stringify(this.lastSave[i])){
				this.lastSave.splice(i,1);
				window.localStorage.setItem('islamabad-store-data', JSON.stringify(this.lastSave));
			}
		}

		this.alertDelete = true;
		if(this.lastSave.length < 1){
			this.storeData = false;
		}
	}

}