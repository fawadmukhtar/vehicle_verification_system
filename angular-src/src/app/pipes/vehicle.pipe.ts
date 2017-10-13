import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'vehiclePipe'})

export class VehiclePipe implements PipeTransform{
	
	transform(value: {}){
		let keys:any = [];
		for(let prop in value){
			keys.push(prop);
		}
		return keys;
	}	
}