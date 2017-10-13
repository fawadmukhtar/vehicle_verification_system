import { Pipe, PipeTransform } from "@angular/core";
// import {PipeTransform} from "angular2/core";

@Pipe({
	name: 'capitalize'
})

export class CapitalizePipe implements PipeTransform {

    transform(value:any) {
        if (value) {
        	value = value.trim();
            return value.charAt(0).toUpperCase() + value.substr(1).toLowerCase();
        }
        return value;
    }

}