import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { VehicleService } from '../../services/vehicle.service';
import { NgProgressService } from 'ng2-progressbar';
import { AuthService } from '../../services/auth.service';

@Component({
	moduleId: module.id,
	selector: 'my-vehicle',
	templateUrl: './vehicle.component.html',
	styleUrls: ['./vehicle.component.css']
})

export class VehicleComponent implements OnInit {

	lastSearches:any = [];
	lastSave:any = [];

	vehicleNumber = '';
	vehicleData:any = '';
	vehicleObj = {};
	vehicleArr:	any = [];
	vehColor = '';
	vehicleFrDb:any = [];
	
	isTrue = false;
	alertTrue = false;
	alertRecord = false;
	checkDate = false;
	searches = false;
	storeData = false;
	alertSave = false;
	alertDelete = false;
	alertExistSave = false;

	constructor(
		private vehicleService: VehicleService, 
		private pService: NgProgressService,
		private authService: AuthService
	){}

	ngOnInit(){
		this.recentSearches(false);
		// this.saveData(false);
		// console.log(this.authService.loggedIn());
		if(this.authService.loggedIn()){
			this.getPunjabVehFrDb();
		}
	}

	colorClass:string = '';

	colorOptions = ['red','white','gold','black','green','purple','yellow','maroon'
	,'golden','blue','brown','cream','gray','orange','pink','silver'];

	onSubmit(){
		this.alertSave = false;
		this.alertDelete = false;
		this.isTrue = false;
		this.alertRecord = false;
		this.alertExistSave = false;
		this.vehicleArr = [];
		let regex = /([a-zA-z]){3}(\s)(\d){3,4}|([a-zA-z]){3}(\s|-)(\d){2}(-)(\d){4}$/g;
		if(regex.test(this.vehicleNumber)){
			this.alertTrue = false;
			// progress bar start
			this.pService.start();
			
			// first check if record is save in saved records if yes then show
			if(this.lastSave){	
				for(let i = 0; i < this.lastSave.length; i++){
					if(this.lastSave[i]['Registration Number:'].toLowerCase() == this.vehicleNumber.toLowerCase()){
						this.vehicleArr.push(this.lastSave[i]);
						this.vehicleColor(this.lastSave[i]['Color:']);
						this.forDateColor(this.lastSave[i]);
						this.isTrue = true;
						this.pService.done();
						return;
					}
				}
			}

			// first check if record is in recent searches then show form here
			if(this.lastSearches){
				for(let i = 0; i < this.lastSearches.length; i++){
					if(this.lastSearches[i]['Registration Number:'].toLowerCase() == this.vehicleNumber.toLowerCase()){
						this.vehicleArr.push(this.lastSearches[i]);
						this.vehicleColor(this.lastSearches[i]['Color:']);
						this.forDateColor(this.lastSearches[i]);
						this.isTrue = true;
						this.pService.done();
						return;
					}
				}
			}

			this.vehicleService.getVehicle(this.vehicleNumber)
				.then(response => {
					this.vehicleData = JSON.parse(response._body);
					if(response._body == '' || response._body == null){
						this.pService.done();
						this.alertRecord = true;
					}else{
						this.pService.done(); // end progress bar
						setTimeout(() => {
							// creating object
							this.vehicleObj = {};
							let prop:any = document.querySelectorAll('td:first-child');
							let value:any =
							 document.querySelectorAll('td:not(:first-child)');
							let propArray = Array.from(prop);
						
							propArray.splice(0,1);
							propArray.splice(9,1);

							prop = propArray;

							for(let i = 0; i < prop.length; i++){
								this.vehicleObj[prop[i].innerHTML] = value[i].innerHTML;
								// console.log(this.vehicleObj);
								// checking for token paid or not
								if(prop[i].innerHTML == 'Token Tax Paid upto:'){
									let tokenPaid = value[i].innerHTML;
									let year = new Date().getFullYear();
									let month = new Date().getMonth();
									let tokenPaidArr = tokenPaid.split(' ');
									let tokenPaidYear = parseInt(tokenPaidArr[1]);
									if((year <= tokenPaidYear || 
										tokenPaid == 'LIFETIME') && ( month <= 5 || tokenPaid == 'LIFETIME')){
										this.checkDate = true;
									}else{
										this.checkDate = false;
									}								
								}
								// get vehicle color
								if(prop[i].innerHTML == 'Color:'){
									this.vehColor = value[i].innerHTML;
								}
							}

							this.recentSearches(true, this.vehicleObj);

							this.vehicleArr.push(this.vehicleObj);
							// console.log(this.vehicleObj);
							this.isTrue = true;
							this.vehicleColor(this.vehColor);

						}, 5);
					}					
				});
		}else{
			this.alertTrue = true;
		}

		let input:any = "true";
		let boolVar = <boolean>input;
	}

	recentSearches(check:boolean, obj?:{}){
		let maxSearches = 10;
		if(check){	
			this.searches = true;
			if(window.localStorage.getItem('last_search')){
				this.lastSearches = [];
				this.lastSearches = JSON.parse(window.localStorage.getItem('last_search'));
				let objCheck = JSON.stringify(obj);
				for(let i = 0; i < this.lastSearches.length; i++){
					if(objCheck == JSON.stringify(this.lastSearches[i])){
						this.lastSearches.splice(i,1);
					}		
				}
				
				this.lastSearches.push(obj);
				if(this.lastSearches.length > maxSearches){
					this.lastSearches.splice(0,1);
				}

				window.localStorage.setItem('last_search', JSON.stringify(this.lastSearches));
			}else{
				this.lastSearches = [];
				this.lastSearches.push(obj);
				window.localStorage.setItem('last_search', JSON.stringify(this.lastSearches));
			}
		}else{
			this.lastSearches = [];
			this.lastSearches = JSON.parse(window.localStorage.getItem('last_search'));
			if(this.lastSearches){
				this.searches = true;			
			}
		}
	}

	vehicleColor(color:string){
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

	onSearch(object:{}){
		this.alertSave = false;
		this.alertDelete = false;
		this.alertExistSave = false;
		this.vehicleArr = [];
		this.vehicleArr.push(object);
		this.forDateColor(object);
		this.isTrue = true;
		this.vehicleColor(this.vehColor);
	}

	forDateColor(object:{}){
		let tokenPaid = object['Token Tax Paid upto:'];
		let year = new Date().getFullYear();
		let month = new Date().getMonth();
		let tokenPaidArr = tokenPaid.split(' ');
		let tokenPaidYear = parseInt(tokenPaidArr[1]);

		if((year <= tokenPaidYear || 
			tokenPaid == 'LIFETIME') && ( month <= 5 || tokenPaid == 'LIFETIME')){
			this.checkDate = true;
		}else{
			this.checkDate = false;
		}								
		this.vehColor = object['Color:'];
	}

	// if this work in the service then that approach is good
	saveData(object:any){
		// save data in mongodb database
		// save userId for every record
		const user = JSON.parse(window.localStorage.getItem('user'));
		object.userId = user.id; 

		this.vehicleService.savePunjabData(object)
			.subscribe((res) => {
				// first check record exist or not in the db
				if(res == 'recordExist'){
					this.alertExistSave = true;
					return;
				}else{
					this.vehicleService.getPunjabVehicles(user.id)
						.subscribe((vehicles) => {

							this.vehicleFrDb = [];
							this.vehicleFrDb = vehicles;
							// for rename object properties
							this.renameObjProp(this.vehicleFrDb);
							this.storeData = true; // its for display block	
							this.alertSave = true;	// alert for record saved
						});
				}
				
			});
	}


	// retrieving punjab vehicles from db
	getPunjabVehFrDb(){
		const user = JSON.parse(window.localStorage.getItem('user'));
		const userId = user.id;  
		this.vehicleFrDb = [];
		this.vehicleService.getPunjabVehicles(userId)
			.subscribe(vehicles => {				
				this.vehicleFrDb = vehicles;
				// for rename object properties
				this.renameObjProp(this.vehicleFrDb);
				if(this.vehicleFrDb == null || this.vehicleFrDb == undefined){
					this.storeData = false;
					return;
				}	
				if(this.vehicleFrDb.length > 0){
					this.storeData = true;
				}else{
					this.storeData = false;
				}
		});
	}

	deleteSave(id:any){	
		this.vehicleService.deletePunjabVehicle(id)
			.subscribe((res) => {
				if(res.n == 1){
					for(let i = 0; i < this.vehicleFrDb.length; i++){
						for(let prop in this.vehicleFrDb[i]){
							if(this.vehicleFrDb[i][prop] == id){
								this.vehicleFrDb.splice(i,1);
								this.alertDelete = true;
								if(this.vehicleFrDb.length < 1){
									this.storeData = false;
								}
							}
						}
					}
				}
				if(this.vehicleFrDb.length < 1){
					this.storeData = false;
				}
			});
	}

	// create function for rename object property names, because
	// in db object prop name without spaces but here in front end code 
	// prop names are with spaces and front end code had written befor 
	// backend code

	// function for rename object properties
	renameObjProp(objects:[any]){
		for(let arr of objects){
			for(let prop in arr){
				switch (prop) {
					case "regNo":
						Object.defineProperty(arr, 'Registration Number:',
					        Object.getOwnPropertyDescriptor(arr, prop));
					    delete arr[prop];
						break;
					case "chassisNo":
						Object.defineProperty(arr, 'Chassis Number:',
					        Object.getOwnPropertyDescriptor(arr, prop));
					    delete arr[prop];
						break;
					case "enginNo":
						Object.defineProperty(arr, 'Engine Number:',
					        Object.getOwnPropertyDescriptor(arr, prop));
					    delete arr[prop];
						break;
					case "makeName":
						Object.defineProperty(arr, 'Make Name:',
					        Object.getOwnPropertyDescriptor(arr, prop));
					    delete arr[prop];
						break;
					case "regDate":
						Object.defineProperty(arr, 'Registration Date:',
					        Object.getOwnPropertyDescriptor(arr, prop));
					    delete arr[prop];
						break;
					case "vehPrice":
						Object.defineProperty(arr, 'Vehicle Price:',
					        Object.getOwnPropertyDescriptor(arr, prop));
					    delete arr[prop];
						break;
					case "color":
						Object.defineProperty(arr, 'Color:',
					        Object.getOwnPropertyDescriptor(arr, prop));
					    delete arr[prop];
						break;
					case "tokenPaid":
						Object.defineProperty(arr, 'Token Tax Paid upto:',
					        Object.getOwnPropertyDescriptor(arr, prop));
					    delete arr[prop];
						break;
					case "ownerName":
						Object.defineProperty(arr, 'Owner Name:',
					        Object.getOwnPropertyDescriptor(arr, prop));
					    delete arr[prop];
						break;
					case "ownerFather":
						Object.defineProperty(arr, 'Father Name:',
					        Object.getOwnPropertyDescriptor(arr, prop));
					    delete arr[prop];
						break;
					case "ownerCity":
						Object.defineProperty(arr, 'Owner City:',
					        Object.getOwnPropertyDescriptor(arr, prop));
					    delete arr[prop];
						break;
					case "model":
						Object.defineProperty(arr, 'Model:',
					        Object.getOwnPropertyDescriptor(arr, prop));
					    delete arr[prop];
						break;
					case "userId":
					    delete arr[prop];
						break;
					case "__v":
					    delete arr[prop];
						break;

					default:
						// code...
						break;
				}				
			}
		}
	}
}

