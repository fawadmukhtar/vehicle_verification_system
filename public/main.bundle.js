webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*ul.punjab-vehicle {\n    list-style: none;\n    background-color: #ccc;\n    margin: 0;\n    padding: 0;\n    margin-top: 20px;\n    display: inline-block;\n\n}\n\nul.punjab-vehicle li {\n    float: left;\n}\n\nul.punjab-vehicle li:not(:last-child) {\n    border-right: 1px solid #a9a0a0;\n}\n\na {\n    padding: 6px 18px;\n    display: inline-block;\n}\n\nli:hover {\n    background-color: #eee;\n    transition: linear all 0.25s;\n}\n\nli:hover a{\n\ttext-decoration: none;\n}\n\na.active  {\n\ttext-decoration: none;\n\tbackground-color: #eee;\t\n}\n*/\n\nul.float-right{\n    float: right;\n}\n\ndiv.margin-top {\n    padding-top: 80px;\n}\n\nnav.menu-top {\n    /*margin-top: 15px;*/\n    background-color: #203d5d;\n}\n\na {\n    color: #d6cccc;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-progress></ng-progress>\n\n<nav class=\"navbar navbar-inverse navbar-fixed-top menu-top\">\n    <div class=\"container menu-top-margin\">\n      <div class=\"navbar-header\">\n            <button type=\"button\" class=\"navbar-toggle collapsed\" (click)=\"toggleState()\">\n                <span class=\"sr-only\">Toggle navigation</span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n            </button>\n            <a class=\"navbar-brand\" routerLink=\"/punjab\" routerLinkActive=\"active\" > Home </a>\n        </div>\n        <div class=\"collapse navbar-collapse\" [ngClass]=\"{ 'in': isIn }\"> \n          <!-- <div class=\"container\"> -->\n            <ul class=\"nav navbar-nav float-left\">\n                <li><a routerLink=\"/punjab\" routerLinkActive=\"active\" > Punjab Vehicle </a></li>\n          <li><a routerLink=\"/islamabad\" routerLinkActive=\"active\" > Islamabad Vehicle </a></li>\n          <li><a routerLink=\"/kpk\" routerLinkActive=\"active\" > KPK Vehicle </a></li>\n          <li><a routerLink=\"/sindh\" routerLinkActive=\"active\" > Sindh Vehicle </a></li>\n        </ul>\n\n            <ul class=\"nav navbar-nav float-right\">\n              <li *ngIf=\"!authService.loggedIn()\" ><a routerLink=\"/register\" routerLinkActive=\"active\" >Register</a></li>\n                    <li *ngIf=\"!authService.loggedIn()\" ><a routerLink=\"/login\" routerLinkActive=\"active\" > Login </a></li>\n              <li *ngIf=\"authService.loggedIn()\" ><a routerLink=\"#\" (click)=\"onLogout()\" >Logout</a></li>\n            </ul>\n        <!-- </div> -->\n      </div>\n    </div>\n</nav>\n<div class=\"container margin-top\">\n    <flash-messages></flash-messages>\n</div>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppComponent = (function () {
    function AppComponent(validateService, flashMessagesService, authService, router) {
        this.validateService = validateService;
        this.flashMessagesService = flashMessagesService;
        this.authService = authService;
        this.router = router;
        this.isIn = false; // store state
    }
    AppComponent.prototype.toggleState = function () {
        var bool = this.isIn;
        this.isIn = bool === false ? true : false;
    };
    AppComponent.prototype.onLogout = function () {
        this.authService.logoutUser();
        this.flashMessagesService.show('You are logged out!', {
            cssClass: 'alert-success',
            timeOut: 5000
        });
        this.router.navigate(['/punjab']);
        return false;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_validate_service__["a" /* ValidateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _d || Object])
], AppComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modules_vehicle_routing_vehicle_routing_module__ = __webpack_require__("../../../../../src/app/modules/vehicle-routing/vehicle-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_vehicle_vehicle_component__ = __webpack_require__("../../../../../src/app/components/vehicle/vehicle.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_islam_vehicle_islam_vehicle_component__ = __webpack_require__("../../../../../src/app/components/islam-vehicle/islam-vehicle.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_kpk_vehicle_kpk_vehicle_component__ = __webpack_require__("../../../../../src/app/components/kpk-vehicle/kpk-vehicle.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_sindh_vehicle_sindh_vehicle_component__ = __webpack_require__("../../../../../src/app/components/sindh-vehicle/sindh-vehicle.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_register_register_component__ = __webpack_require__("../../../../../src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_vehicle_service__ = __webpack_require__("../../../../../src/app/services/vehicle.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pipes_vehicle_pipe__ = __webpack_require__("../../../../../src/app/pipes/vehicle.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pipes_reverse_pipe__ = __webpack_require__("../../../../../src/app/pipes/reverse.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pipes_capitalize_pipe__ = __webpack_require__("../../../../../src/app/pipes/capitalize.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_ng2_progressbar__ = __webpack_require__("../../../../ng2-progressbar/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// loading custom module

// loading component





// loading authentication components


// loading Services








var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_18_ng2_progressbar__["a" /* NgProgressModule */],
            __WEBPACK_IMPORTED_MODULE_4__modules_vehicle_routing_vehicle_routing_module__["a" /* VehicleRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_19_angular2_flash_messages__["FlashMessagesModule"]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components_vehicle_vehicle_component__["a" /* VehicleComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_kpk_vehicle_kpk_vehicle_component__["a" /* KpkVehicleComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_sindh_vehicle_sindh_vehicle_component__["a" /* SindhVehicleComponent */],
            __WEBPACK_IMPORTED_MODULE_15__pipes_vehicle_pipe__["a" /* VehiclePipe */],
            __WEBPACK_IMPORTED_MODULE_7__components_islam_vehicle_islam_vehicle_component__["a" /* IslamVehicleComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_16__pipes_reverse_pipe__["a" /* ReversePipe */],
            __WEBPACK_IMPORTED_MODULE_17__pipes_capitalize_pipe__["a" /* CapitalizePipe */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_12__services_vehicle_service__["a" /* VehicleService */],
            __WEBPACK_IMPORTED_MODULE_14__services_validate_service__["a" /* ValidateService */],
            __WEBPACK_IMPORTED_MODULE_13__services_auth_service__["a" /* AuthService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/islam-vehicle/islam-vehicle.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div.clear{\n\tclear: both;\n}\n\ndiv.ent-info-div {\n    background-color: #eee;\n    padding: 36px;\n    margin-top: 30px;\n    margin-bottom: -29px;\n    /* text-align: center; */\n    box-shadow: 2px 2px 6px 1px #9a9797;\n}\n\ndiv.search-form {\n    background-color: #eee;\n    padding: 36px;\n    margin-top: 30px;\n    box-shadow: 2px 2px 6px 1px #9a9797;\n}\n\nbutton.search-btn {\n    margin-top: 8px;\n}\n\n/* search output record */\n\ndiv.new-table {\n    background-color: #fff;\n    padding: 36px;\n    margin-top: 30px;\n    box-shadow: 2px 2px 6px 1px #9a9797;\n}\n\ntd.token-paid{\n    background-color: #62f442;    \n}\n\ntd.token-unpaid {\n    background-color: #cc0216;\n    color: #fff;\n}\n\n/* Recent Searches */\n\ndiv.recent-searches {\n    margin: 30px 0;\n    padding: 10px;\n    text-align: center;\n}\n\nul.ol-searches {\n    list-style: none;\n    padding: 0;\n    margin: 0;\n}\n\ndiv.recent-searches-wrapper {\n\n}\n\n\nli.li-searches span.list-index {\n    background-color: #2196F3;\n    position: relative;\n    z-index: 2;\n    border-radius: 50%;\n    border: 6px solid #ffffff;\n    outline: none;\n    box-shadow: none;\n    width: 50px;\n    height: 50px;\n    display: inline-block;\n    text-align: center;\n    line-height: 38px;\n    color: #fff;\n\n}\n\nli.li-searches span.list-data {\n    background-color: #eee;\n    padding: 10px 0;\n    text-align: center;\n    position: relative;\n    left: -14px;\n    display: inline-block;\n    width: 250px;\n}\n\ndiv.recent-searches span {\n    color: #607D8B;\n    font-size: 16px;\n}\n\ndiv.recent-searches span.list-data:hover {\n    background-color: #607D8B;\n    cursor: pointer;\n    border-radius: 3px;\n    color: #eee;\n    transition: linear all 0.25s;\n    cursor: pointer;\n}\n\nh2.h2-searches {\n    margin: 0;\n    font-size: 24px;\n    text-align: center;\n    color: #2196f3;\n    font-weight: bold;\n    margin-bottom: 10px;\n}\n\nol.ol-searches {\n    padding-left: 15px;\n}\n\nli.li-searches {\n    color: #071879;\n    cursor: pointer;\n}\n\nli.li-searches:hover {\n    color: #03A9F4;\n    transition: all linear 0.25s;\n}\n\n\n\n\n/* Saved Records */\n\ndiv.clear{\n    clear: both;\n}\n\ndiv.recent-save {\n    padding: 10px;\n    text-align: center;\n}\n\nh2.h2-save {\n    margin: 0;\n    font-size: 24px;\n    text-align: center;\n    color: #2196f3;\n    font-weight: bold;\n    margin-bottom: 10px;\n}\n\nul.ol-save {\n    list-style: none;\n    padding: 0;\n    margin: 0;\n}\n\n\n\nli.li-save {\n    color: #071879;\n    cursor: pointer;\n}\n\nli.li-save span.list-index {\n    background-color: #2196F3;\n    position: relative;\n    z-index: 2;\n    border-radius: 50%;\n    border: 6px solid #ffffff;\n    outline: none;\n    box-shadow: none;\n    width: 50px;\n    height: 50px;\n    display: inline-block;\n    text-align: center;\n    line-height: 38px;\n    color: #fff;\n\n}\n\nli.li-save span.list-data {\n    background-color: #eee;\n    padding: 10px 0;\n    text-align: center;\n    position: relative;\n    left: -14px;\n    display: inline-block;\n    width: 250px;\n    font-size: 16px;\n    color: #607D8B;\n}\n\nli.li-save span.list-data:hover {\n    color: #eee;\n    background-color: #607D8B;\n    transition: all linear 0.25s;\n    cursor: pointer;\n}\n\n/*li.li-save span:hover {\n    color: #03A9F4;\n    transition: all linear 0.25s;\n}*/\n\nbutton.delete-save {\n    position: relative;\n    left: -14px;\n    padding: 12px;\n    border: none;\n}\n\nbutton.delete-save:hover{\n    background-color: #607D8B;\n    color: #eee;\n    transition: linear all 0.25s;\n    cursor: pointer;\n}\n\ndiv.alertSave {\n    margin-top: 16px;\n}\n\ndiv.alertDelete {\n    margin-top: 15px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/islam-vehicle/islam-vehicle.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container padding-top\">\n\t<div class=\"form-wrapper col-md-6\">\n\t\t<h2>Islamabad Vehicle Verificatoin</h2>\n\t\t<div class=\"ent-info-div\">\n\t        You can try Different Combinations e.g;<br>\n\t       \tIn first (i.e, IDM, NK, SL etc.) <strong>WhiteSpace</strong> in last (i.e, 9921, 700, 231,652)\t\n\t    </div>\n\t\t<div class=\"search-form\">\n\t\t\t<form  (ngSubmit)=\"onSubmit(); vehicleForm.reset()\"   #vehicleForm=\"ngForm\" >\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label for=\"vehicle\">Vehicle Number:</label>\n\t\t\t\t\t<input type=\"text\" [(ngModel)]=\"vehicleNumber\" class=\"form-control\" name=\"vehicleNumber\" id=\"vehicle\" placeholder=\"Enter vehicle number\">\n\t\t\t\t\t<button type=\"submit\" class=\"search-btn btn btn-primary\">Search</button> \n\t\t\t\t</div>\n\t\t\t</form>\n\t\t\t<div *ngIf=\"alertTrue\" class=\"alert alert-danger alert-dismissable fade in\">\n\t\t\t\t<a (click)=\"alertTrue = false\" href=\"\" class=\"close\" data-dismiss=\"alert\" aria-label=\"close\">&times;</a>\n\t\t\t\t Please insert format one of above\n\t\t\t</div>\n\t\t\t<div *ngIf=\"alertRecord\" class=\"alert alert-info alert-dismissable fade in\">\n\t\t\t\t<a (click)=\"alertRecord = false\" href=\"\" class=\"close\" data-dismiss=\"alert\" aria-label=\"close\">&times;</a>\n\t\t\t\tRecord not found, please insert a valid vehicle number or contact with islamabad\n\t\t\t\texcise department\n\t\t\t</div>\n\t\t</div>\n\t\t<div style=\"display: none;\"  [innerHTML]=\"vehicleData\"> </div>\n\t\t<div class=\"new-table\" *ngIf=\"isTrue\" >\n\t\t\t<table class=\"table table-striped\">\n\t\t\t\t<thead>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<th>Name</th>\n\t\t\t\t\t\t<th>Detail</th>\n\t\t\t\t\t</tr>\n\t\t\t\t</thead>\n\t\t\t\t<tbody *ngFor=\"let obj of vehicleArr\">\t\n\t\t\t\t\t<tr *ngFor=\"let key of obj | vehiclePipe; let i=index \">\n\t\t\t\t\t\t<td *ngIf=\"i != 10\"> {{key}}: </td>\n\t\t\t\t\t\t<td *ngIf=\"i != 10\" [class.token-paid]='checkDate && key == \"TOKEN PAID UPTO\"'\n\t\t\t\t\t\t[class.token-unpaid]='!checkDate && key == \"TOKEN PAID UPTO\"'\n\t\t\t\t\t\t>\n\t\t\t\t\t\t{{obj[key]}} \t\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t</tbody>\n\t\t\t</table>\n\t\t\t<button  (click)=\"saveData(true, vehicleArr[0])\" class=\"btn btn-primary\" >Save</button>\n\t\t\t<button (click)=\"isTrue = false\" class=\"btn btn-primary\" >Close</button>\n\t\t\t<div *ngIf=\"alertSave\" class=\"alert alert-info alert-dismissable fade in alertSave\">\n\t\t\t\t<a (click)=\"alertSave = false\" href=\"\" class=\"close\" data-dismiss=\"alert\" aria-label=\"close\">&times;</a>\n\t\t\t\tYour record has been saved successfully\n\t\t\t</div>\n\t\t\t<div *ngIf=\"alertExistSave\" class=\"alert alert-info alert-dismissable fade in alertSave\">\n\t\t\t\t<a (click)=\"alertExistSave = false\" href=\"\" class=\"close\" data-dismiss=\"alert\" aria-label=\"close\">&times;</a>\n\t\t\t\t\tRecord is already saved, see in recent saved\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<div class=\"local-storage-data col-md-6\">\n\t\t<div class=\"recent-searches-wrapper\">\n\t\t\t<div *ngIf=\"searches\" class=\"recent-searches\">\n\t\t\t\t<h2 class=\"h2-searches\">Recent Searches</h2>\n\t\t\t\t<ul class=\"ol-searches\">\n\t\t\t\t\t<li class=\"li-searches\" *ngFor=\"let lastSearch of lastSearches | reverse; let i = index\" (click)=\"onSearch(lastSearch)\" >\n\t\t\t\t\t\t<span class=\"list-index\">{{i+1}}</span>\n\t\t\t\t\t\t<span class=\"list-data\">\n\t\t\t\t\t\t\t{{lastSearch['MAKER / MAKE'] | capitalize}}\n\t\t\t\t\t\t\t{{lastSearch['REGISTRATION                         NO'] | capitalize}}\n\t\t\t\t\t\t</span>\t\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"recent-save-wrapper\">\n\t\t\t<div *ngIf=\"storeData\" class=\"recent-save\">\n\t\t\t\t<h2 class=\"h2-save\">Recent Saved</h2>\n\t\t\t\t<ul class=\"ol-save\">\n\t\t\t\t\t<li class=\"li-save\" *ngFor=\"let save of lastSave; let i = index\" (click)=\"onSearch(save)\"> \n\t\t\t\t\t\t<span class=\"list-index\">{{i+1}}</span>\n\t\t\t\t\t\t<span class=\"list-data\"> {{save['MAKER / MAKE'] | capitalize}}   {{save['REGISTRATION                         NO'] | capitalize}} </span>  <button class=\"delete-save\" (click)=\"deleteSave(save); $event.stopPropagation()\">x</button> \n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t\t<div *ngIf=\"alertDelete\" class=\"alert alert-info alert-dismissable fade in alertDelete\">\n\t\t\t\t<a (click)=\"alertDelete = false\" href=\"\" class=\"close\" data-dismiss=\"alert\" aria-label=\"close\">&times;</a>\n\t\t\t\tYour record has been deleted successfully\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\n\n\t<div class=\"clear\"></div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/islam-vehicle/islam-vehicle.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IslamVehicleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_vehicle_service__ = __webpack_require__("../../../../../src/app/services/vehicle.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_progressbar__ = __webpack_require__("../../../../ng2-progressbar/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var IslamVehicleComponent = (function () {
    function IslamVehicleComponent(vehicleService, pService) {
        this.vehicleService = vehicleService;
        this.pService = pService;
        this.vehicleNumber = '';
        this.vehicleData = '';
        this.vehicleObject = {};
        this.vehicleArr = [];
        this.lastSearches = []; // for localstorage of recent searches 
        this.lastSave = []; // save record in localstorage
        // flags
        this.isTrue = false; // its for show records
        this.checkDate = false; // its for token paid or not
        this.alertTrue = false; // its for input field is valid or not
        this.alertRecord = false; // its for return data from server, null or empty or true
        this.alertExistSave = false; // its for record already save alert
        this.alertSave = false; // its for record saved successfully alert
        this.searches = false; // its for recent searches Div
        this.alertDelete = false; // its for alert delete record
        this.storeData = false; // its for save data in localstorage
    }
    // call after all intialization complete
    IslamVehicleComponent.prototype.ngOnInit = function () {
        this.recentSearches(false);
        this.saveData(false);
    };
    IslamVehicleComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isTrue = false;
        this.alertRecord = false;
        this.alertSave = false;
        this.alertExistSave = false;
        this.alertDelete = false;
        this.vehicleArr = [];
        // its for match with object property value
        var checkVehcileNum = this.vehicleNumber;
        checkVehcileNum = checkVehcileNum.split(' ');
        checkVehcileNum = checkVehcileNum[0] + '-' + checkVehcileNum[1];
        var VehicleNum = this.vehicleNumber.split(' ');
        var firstVehicleNum = VehicleNum[0];
        var lastVehicleNum = VehicleNum[1];
        // check submitted data is valid or not
        var regex = /(([a-zA-z]){3}|([a-zA-z]){2})(\s)(\d){3,4}$/g;
        if (regex.test(this.vehicleNumber)) {
            this.pService.start();
            this.alertTrue = false;
            // first check if record is save in saved records if yes then show
            if (this.lastSave) {
                for (var i = 0; i < this.lastSave.length; i++) {
                    if (this.lastSave[i]['REGISTRATION                         NO']
                        .toLowerCase() == checkVehcileNum.toLowerCase()) {
                        this.vehicleArr.push(this.lastSave[i]);
                        this.isTrue = true;
                        this.pService.done();
                        return;
                    }
                }
            }
            // // first check if record is in recent searches then show form here
            if (this.lastSearches) {
                for (var i = 0; i < this.lastSearches.length; i++) {
                    if (this.lastSearches[i]['REGISTRATION                         NO']
                        .toLowerCase() == checkVehcileNum.toLowerCase()) {
                        this.vehicleArr.push(this.lastSearches[i]);
                        this.isTrue = true;
                        this.pService.done();
                        return;
                    }
                }
            }
            this.vehicleService.getIslamabadVehicle(firstVehicleNum, lastVehicleNum)
                .then(function (response) {
                _this.vehicleData = response._body;
                if (response._body == null || response._body == '') {
                    _this.pService.done();
                    _this.alertRecord = true;
                }
                else {
                    _this.pService.done();
                    // call function for create object after some delay
                    setTimeout(function () {
                        _this.createObject();
                        _this.checkTokenPaid(_this.vehicleObject);
                        _this.recentSearches(true, _this.vehicleObject);
                    }, 5);
                }
            });
        }
        else {
            this.alertTrue = true;
        }
    };
    IslamVehicleComponent.prototype.createObject = function () {
        this.vehicleArr = [];
        this.vehicleObject = {};
        var property = document.querySelectorAll('div.record-row div');
        var value = document.querySelectorAll('div.record-row font font');
        for (var i = 0; i < property.length; i++) {
            this.vehicleObject[property[i].innerText.slice(0, -2).trim()] = value[i].innerText;
        }
        this.vehicleArr.push(this.vehicleObject);
        // enable for DOM
        this.isTrue = true;
    };
    IslamVehicleComponent.prototype.checkTokenPaid = function (object) {
        var tokenPaid = object['TOKEN PAID UPTO'];
        var year = new Date().getFullYear();
        var month = new Date().getMonth();
        var tokenPaidArr = tokenPaid.split('-');
        var tokenPaidYear = parseInt(tokenPaidArr[2]);
        if ((year <= tokenPaidYear) && (month <= 5)) {
            this.checkDate = true;
        }
        else {
            this.checkDate = false;
        }
    };
    IslamVehicleComponent.prototype.recentSearches = function (check, object) {
        var maxSearches = 10;
        if (check) {
            this.searches = true;
            if (window.localStorage.getItem('islamabad_last_search')) {
                this.lastSearches = [];
                this.lastSearches = JSON.parse(window.localStorage.getItem('islamabad_last_search'));
                var objCheck = JSON.stringify(object);
                for (var i = 0; i < this.lastSearches.length; i++) {
                    if (objCheck == JSON.stringify(this.lastSearches[i])) {
                        this.lastSearches.splice(i, 1);
                    }
                }
                this.lastSearches.push(object);
                if (this.lastSearches.length > maxSearches) {
                    this.lastSearches.splice(0, 1);
                }
                window.localStorage.setItem('islamabad_last_search', JSON.stringify(this.lastSearches));
            }
            else {
                this.lastSearches = [];
                this.lastSearches.push(object);
                window.localStorage.setItem('islamabad_last_search', JSON.stringify(this.lastSearches));
            }
        }
        else {
            this.lastSearches = [];
            this.lastSearches = JSON.parse(window.localStorage.getItem('islamabad_last_search'));
            if (this.lastSearches) {
                this.searches = true;
            }
        }
    };
    // save data in local storage
    IslamVehicleComponent.prototype.saveData = function (check, object) {
        if (check) {
            this.storeData = true;
            if (this.lastSave) {
                for (var i = 0; i < this.lastSave.length; i++) {
                    if (JSON.stringify(this.lastSave[i]) == JSON.stringify(object)) {
                        this.alertExistSave = true;
                        return;
                    }
                }
            }
            if (window.localStorage.getItem('islamabad-store-data')) {
                this.lastSave = [];
                this.lastSave = JSON.parse(window.localStorage.getItem('islamabad-store-data'));
                var objCheck = JSON.stringify(object);
                for (var i = 0; i < this.lastSave.length; i++) {
                    if (objCheck == JSON.stringify(this.lastSave[i])) {
                        this.lastSave.splice(i, 1);
                    }
                }
                this.lastSave.unshift(object);
                window.localStorage.setItem('islamabad-store-data', JSON.stringify(this.lastSave));
            }
            else {
                this.lastSave = [];
                this.lastSave.unshift(object);
                window.localStorage.setItem('islamabad-store-data', JSON.stringify(this.lastSave));
            }
            this.alertSave = true;
        }
        else {
            this.lastSave = [];
            this.lastSave = JSON.parse(window.localStorage.getItem('islamabad-store-data'));
            if (this.lastSave == null || this.lastSave == undefined) {
                this.storeData = false;
                return;
            }
            if (this.lastSave.length > 0) {
                this.storeData = true;
            }
            else {
                this.storeData = false;
            }
        }
    };
    // when click on record in recent searches or saved record then 
    // this function will display record
    IslamVehicleComponent.prototype.onSearch = function (object) {
        this.alertSave = false;
        this.alertDelete = false;
        this.alertExistSave = false;
        this.vehicleArr = [];
        this.vehicleArr.push(object);
        // this.forDateColor(object);
        this.isTrue = true;
        // this.vehicleColor(this.vehColor);
    };
    // its for delte record from saved records
    IslamVehicleComponent.prototype.deleteSave = function (object) {
        var objectCheck = {};
        objectCheck = JSON.stringify(object);
        for (var i = 0; i < this.lastSave.length; i++) {
            if (objectCheck == JSON.stringify(this.lastSave[i])) {
                this.lastSave.splice(i, 1);
                window.localStorage.setItem('islamabad-store-data', JSON.stringify(this.lastSave));
            }
        }
        this.alertDelete = true;
        if (this.lastSave.length < 1) {
            this.storeData = false;
        }
    };
    return IslamVehicleComponent;
}());
IslamVehicleComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'islam-vehicle',
        template: __webpack_require__("../../../../../src/app/components/islam-vehicle/islam-vehicle.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/islam-vehicle/islam-vehicle.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_vehicle_service__["a" /* VehicleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_vehicle_service__["a" /* VehicleService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ng2_progressbar__["b" /* NgProgressService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ng2_progressbar__["b" /* NgProgressService */]) === "function" && _b || Object])
], IslamVehicleComponent);

var _a, _b;
//# sourceMappingURL=islam-vehicle.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/kpk-vehicle/kpk-vehicle.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div.clear{\n\tclear: both;\n}\n\ndiv.ent-info-div {\n    background-color: #eee;\n    padding: 36px;\n    margin-top: 30px;\n    margin-bottom: -29px;\n    box-shadow: 2px 2px 6px 1px #9a9797;\n}\n\ndiv.search-form {\n    background-color: #eee;\n    padding: 36px;\n    margin-top: 30px;\n    box-shadow: 2px 2px 6px 1px #9a9797;\n}\n\nbutton.search-btn {\n    margin-top: 8px;\n}\n\n\n/* search output record */\n\ndiv.new-table {\n    background-color: #fff;\n    padding: 36px;\n    margin-top: 30px;\n    box-shadow: 2px 2px 6px 1px #9a9797;\n}\n\ntd.token-paid{\n    background-color: #62f442;\n}\n\ntd.token-unpaid {\n    background-color: #cc0216;\n    color: #fff;\n}\n\n\n/* Recent Searches */\n\ndiv.recent-searches {\n    margin: 30px 0;\n    padding: 10px;\n    text-align: center;\n}\n\nul.ol-searches {\n    list-style: none;\n    padding: 0;\n    margin: 0;\n}\n\n\nli.li-searches span.list-index {\n    background-color: #2196F3;\n    position: relative;\n    z-index: 2;\n    border-radius: 50%;\n    border: 6px solid #ffffff;\n    outline: none;\n    box-shadow: none;\n    width: 50px;\n    height: 50px;\n    display: inline-block;\n    text-align: center;\n    line-height: 38px;\n    color: #fff;\n\n}\n\nli.li-searches span.list-data {\n    background-color: #eee;\n    padding: 10px 0;\n    text-align: center;\n    position: relative;\n    left: -14px;\n    display: inline-block;\n    width: 250px;\n}\n\ndiv.recent-searches span {\n    color: #607D8B;\n    font-size: 16px;\n}\n\ndiv.recent-searches span.list-data:hover {\n    background-color: #607D8B;\n    cursor: pointer;\n    border-radius: 3px;\n    color: #eee;\n    transition: linear all 0.25s;\n    cursor: pointer;\n}\n\nh2.h2-searches {\n    margin: 0;\n    font-size: 24px;\n    text-align: center;\n    color: #2196f3;\n    font-weight: bold;\n    margin-bottom: 10px;\n}\n\nol.ol-searches {\n    padding-left: 15px;\n}\n\nli.li-searches {\n    color: #071879;\n    cursor: pointer;\n}\n\nli.li-searches:hover {\n    color: #03A9F4;\n    transition: all linear 0.25s;\n}\n\n\n\n\n/* Saved Records */\n\ndiv.clear{\n    clear: both;\n}\n\ndiv.recent-save {\n    padding: 10px;\n    text-align: center;\n}\n\nh2.h2-save {\n    margin: 0;\n    font-size: 24px;\n    text-align: center;\n    color: #2196f3;\n    font-weight: bold;\n    margin-bottom: 10px;\n}\n\nul.ol-save {\n    list-style: none;\n    padding: 0;\n    margin: 0;\n}\n\nli.li-save {\n    color: #071879;\n    cursor: pointer;\n}\n\nli.li-save span.list-index {\n    background-color: #2196F3;\n    position: relative;\n    z-index: 2;\n    border-radius: 50%;\n    border: 6px solid #ffffff;\n    outline: none;\n    box-shadow: none;\n    width: 50px;\n    height: 50px;\n    display: inline-block;\n    text-align: center;\n    line-height: 38px;\n    color: #fff;\n\n}\n\nli.li-save span.list-data {\n    background-color: #eee;\n    padding: 10px 0;\n    text-align: center;\n    position: relative;\n    left: -14px;\n    display: inline-block;\n    width: 250px;\n    font-size: 16px;\n    color: #607D8B;\n}\n\nli.li-save span.list-data:hover {\n    color: #eee;\n    background-color: #607D8B;\n    transition: all linear 0.25s;\n    cursor: pointer;\n}\n\n\n\nbutton.delete-save {\n    position: relative;\n    left: -14px;\n    padding: 12px;\n    border: none;\n}\n\nbutton.delete-save:hover{\n    background-color: #607D8B;\n    color: #eee;\n    transition: linear all 0.25s;\n    cursor: pointer;\n}\n\ndiv.alertSave {\n    margin-top: 16px;\n}\n\ndiv.alertDelete {\n    margin-top: 15px;\n}\n\n/*for vehicle color*/\n\nspan.color-span {\n    position: relative;\n    left: 0;\n    top: 3px;\n    display: inline-block;\n    width: 30px;\n    height: 16px;\n    border: 1px solid;\n}\n\nspan.red{\n    background-color: red;  \n}\nspan.white{\n    background-color: white;    \n}\nspan.gold{\n    background-color: gold; \n}\nspan.black{\n    background-color: black;    \n}\nspan.green{\n    background-color: green;    \n}\nspan.purple{\n    background-color: purple;   \n}\nspan.yellow{\n    background-color: yellow;   \n}\nspan.maroon{\n    background-color: maroon;   \n}\nspan.golden{\n    background-color: #FFD700;  \n}\nspan.blue{\n    background-color: blue; \n}\nspan.brown{\n    background-color: brown;    \n}\nspan.cream{\n    background-color: #fffdd0;  \n}\nspan.gray{\n    background-color: gray; \n}\nspan.orange{\n    background-color: orange;   \n}span.pink{\n    background-color: pink; \n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/kpk-vehicle/kpk-vehicle.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container padding-top\">\n\t<div class=\"form-wrapper col-md-6\">\n\t\t<h2>KPK Vehicle Verificatoin</h2>\n\t\t<div class=\"ent-info-div\">\n\t        You can try Different Combinations e.g;<br>\n\t       \tIn first (i.e, A, BB, SL etc.) <strong>WhiteSpace</strong> in last (i.e, 9921, 700)\t\n\t    </div>\n\t\t<div class=\"search-form\">\n\t\t\t<form  (ngSubmit)=\"onSubmit(); vehicleForm.reset()\"   #vehicleForm=\"ngForm\" >\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label for=\"vehicle\">Vehicle Number:</label>\n\t\t\t\t\t<input type=\"text\" [(ngModel)]=\"vehicleNumber\" class=\"form-control\" name=\"vehicleNumber\" id=\"vehicle\" placeholder=\"Enter vehicle number\">\n\t\t\t\t\t \n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label for=\"vehicleDistrict\">Select District:</label>\n\t\t\t\t\t<select  [(ngModel)]=\"vehicleDistrict\" name=\"selectList\" class=\"form-control\" id=\"vehicleDistrict\">\n\t\t\t\t\t\t<option selected=\"selected\" value=\"\">-- Select District --</option>\n\t\t\t            <option value=\"abbotabad\">Abbottabad</option>\n\t\t\t            <option value=\"bannu\">Bannu</option>\n\t\t\t            <option value=\"battagram\">Battagram</option>\n\t\t\t            <option value=\"buner\">Buner</option>\n\t\t\t            <option value=\"charsada\">Charsadda</option>\n\t\t\t            <option value=\"chitral\">Chitral</option>\n\t\t\t            <option value=\"dikhan\">Dera Ismail Khan</option>\n\t\t\t            <option value=\"hangu\">Hangu</option>\n\t\t\t            <option value=\"haripur\">Haripur</option>\n\t\t\t            <option value=\"karak\">Karak</option>\n\t\t\t            <option value=\"kohat\">Kohat</option>\n\t\t\t            <option value=\"kohistan\">Kohistan</option>\n\t\t\t            <option value=\"lmarwat\">Lakki Marwat</option>\n\t\t\t            <option value=\"lower_dir\">Lower Dir (PATA)</option>\n\t\t\t            <option value=\"malakand\">Malakand (PATA)</option>\n\t\t\t            <option value=\"mansehra\">Mansehra</option>\n\t\t\t            <option value=\"mardan\">Mardan</option>\n\t\t\t            <option value=\"nowshera\">Nowshera</option>\n\t\t\t            <option value=\"peshawar\">Peshawar</option>\n\t\t\t            <option value=\"shangla\">Shangla</option>\n\t\t\t            <option value=\"swabi\">Swabi</option>\n\t\t\t            <option value=\"swat\">Swat </option>\n\t\t\t            <option value=\"tank\">Tank</option>\n\t\t\t            <option value=\"torghar\">Tor Ghar</option>\n\t\t\t            <option value=\"uper_dir\">Upper Dir</option>\t\n\t\t\t\t\t</select>\n\t\t\t\t</div>\n\n\t\t\t\t<button type=\"submit\" class=\"search-btn btn btn-primary\">Search</button>\n\t\t\t</form>\n\t\t\t<div *ngIf=\"alertTrue\" class=\"alert alert-danger alert-dismissable fade in\">\n\t\t\t\t<a (click)=\"alertTrue = false\" href=\"\" class=\"close\" data-dismiss=\"alert\" aria-label=\"close\">&times;</a>\n\t\t\t\t Please insert format one of above\n\t\t\t</div>\n\t\t\t<div *ngIf=\"alertRecord\" class=\"alert alert-info alert-dismissable fade in\">\n\t\t\t\t<a (click)=\"alertRecord = false\" href=\"\" class=\"close\" data-dismiss=\"alert\" aria-label=\"close\">&times;</a>\n\t\t\t\tRecord not found, please insert a valid vehicle number or contact with Kpk\n\t\t\t\texcise department\n\t\t\t</div>\n\t</div>\n\t\t<div class=\"display-none-html\" [hidden]=\"true\"  [innerHTML]=\"vehicleData\"> </div>\n\t\t<div class=\"new-table\" *ngIf=\"isTrue\" >\n\t\t\t<table class=\"table table-striped\">\n\t\t\t\t<thead>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<th>Name</th>\n\t\t\t\t\t\t<th>Detail</th>\n\t\t\t\t\t</tr>\n\t\t\t\t</thead>\n\t\t\t\t<tbody *ngFor=\"let obj of vehicleArr\">\t\n\t\t\t\t\t<tr *ngFor=\"let key of obj | vehiclePipe \">\n\t\t\t\t\t\t<td class=\"object-property\"> {{key}}: </td>\n\t\t\t\t\t\t<td> \n\t\t\t\t\t\t<span *ngIf=\"key=='Color'\" class=\"{{colorClass}} color-span\" > </span>\n\t\t\t\t\t\t\t{{obj[key]}}\n\t\t\t\t\t \t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t</tbody>\n\t\t\t</table>\n\t\t\t<button  (click)=\"saveData(true, vehicleArr[0])\" class=\"btn btn-primary\" >Save</button>\n\t\t\t<button (click)=\"isTrue = false\" class=\"btn btn-primary\" >Close</button>\n\t\t\t<div *ngIf=\"alertSave\" class=\"alert alert-info alert-dismissable fade in alertSave\">\n\t\t\t\t<a (click)=\"alertSave = false\" href=\"\" class=\"close\" data-dismiss=\"alert\" aria-label=\"close\">&times;</a>\n\t\t\t\tYour record has been saved successfully\n\t\t\t</div>\n\t\t\t<div *ngIf=\"alertExistSave\" class=\"alert alert-info alert-dismissable fade in alertSave\">\n\t\t\t\t<a (click)=\"alertExistSave = false\" href=\"\" class=\"close\" data-dismiss=\"alert\" aria-label=\"close\">&times;</a>\n\t\t\t\t\tRecord is already saved, see in recent saved\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<div class=\"local-storage-data col-md-6\">\n\t\t<div class=\"recent-searches-wrapper\">\n\t\t\t<div *ngIf=\"searches\" class=\"recent-searches\">\n\t\t\t\t<h2 class=\"h2-searches\">Recent Searches</h2>\n\t\t\t\t<ul class=\"ol-searches\">\n\t\t\t\t\t<li class=\"li-searches\" *ngFor=\"let lastSearch of lastSearches | reverse;\n\t\t\t\t \t let i= index \" (click)=\"onSearch(lastSearch)\" >\n\t\t\t\t\t\t<span class=\"list-index\">\n\t\t\t\t\t\t\t{{i+1}}\n\t\t\t\t\t\t</span>\n\t\t\t\t\t\t<span class=\"list-data\">\n\t\t\t\t\t\t\t{{lastSearch['Maker Name'] | capitalize}}\n\t\t\t\t\t\t\t{{lastSearch['Vehicle Registration Number'] | capitalize}}\t\n\t\t\t\t\t\t</span>\t\t\t\t\t\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"recent-save-wrapper\">\n\t\t\t<div *ngIf=\"storeData\" class=\"recent-save\">\n\t\t\t\t<h2 class=\"h2-save\">Recent Saved</h2>\n\t\t\t\t<ul class=\"ol-save\">\n\t\t\t\t\t<li class=\"li-save\" *ngFor=\"let save of lastSave let i = index\" (click)=\"onSearch(save)\">\n\t\t\t\t\t<span class=\"list-index\">{{i+1}}</span> \n\t\t\t\t\t<span class=\"list-data\"> {{save['Maker Name'] | capitalize}}   {{save['Vehicle Registration Number'] | capitalize}} </span>  <button class=\"delete-save\" (click)=\"deleteSave(save); $event.stopPropagation()\">x</button> </li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\n\t\t\t<div *ngIf=\"alertDelete\" class=\"alert alert-info alert-dismissable fade in alertDelete\">\n\t\t\t\t<a (click)=\"alertDelete = false\" href=\"\" class=\"close\" data-dismiss=\"alert\" aria-label=\"close\">&times;</a>\n\t\t\t\tYour record has been deleted successfully\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\n\t<div class=\"clear\"></div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/kpk-vehicle/kpk-vehicle.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KpkVehicleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_vehicle_service__ = __webpack_require__("../../../../../src/app/services/vehicle.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_progressbar__ = __webpack_require__("../../../../ng2-progressbar/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var KpkVehicleComponent = (function () {
    function KpkVehicleComponent(vehicleService, pService) {
        this.vehicleService = vehicleService;
        this.pService = pService;
        this.vehicleNumber = '';
        this.vehicleDistrict = '';
        this.vehicleRegistered = 'reg';
        this.vehicleData = '';
        this.vehicleObject = {};
        this.vehicleArr = [];
        this.lastSearches = []; // for localstorage of recent searches 
        this.lastSave = []; // save record in localstorage
        // flags
        this.htmlHidden = false;
        this.isTrue = false; // its for show records
        this.checkDate = false; // its for token paid or not
        this.alertTrue = false; // its for input field is valid or not
        this.alertRecord = false; // its for return data from server, null or empty or true
        this.alertExistSave = false; // its for record already save alert
        this.alertSave = false; // its for record saved successfully alert
        this.searches = false; // its for recent searches Div
        this.alertDelete = false; // its for alert delete record
        this.storeData = false; // its for save data in localstorage
        this.colorClass = '';
        this.colorOptions = ['red', 'white', 'gold', 'black', 'green', 'purple', 'yellow', 'maroon',
            'golden', 'blue', 'brown', 'cream', 'gray', 'orange', 'pink', 'silver'];
    }
    // call after all intialization complete
    KpkVehicleComponent.prototype.ngOnInit = function () {
        this.recentSearches(false);
        this.saveData(false);
    };
    KpkVehicleComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isTrue = false;
        this.alertRecord = false;
        this.alertSave = false;
        this.alertExistSave = false;
        this.alertDelete = false;
        this.vehicleArr = [];
        // check submitted data is valid or not
        var regex = /(([a-zA-z]){1}|([a-zA-z]){2})(\s)(\d){2,4}$/g;
        if (regex.test(this.vehicleNumber)) {
            this.pService.start();
            this.alertTrue = false;
            // first check if record is save in saved records if yes then show
            if (this.lastSave) {
                for (var i = 0; i < this.lastSave.length; i++) {
                    if (this.lastSave[i]['Vehicle Registration Number']
                        .toLowerCase() == this.vehicleNumber.toLowerCase()) {
                        this.vehicleArr.push(this.lastSave[i]);
                        this.vehicleColor(this.lastSave[i]['Color']);
                        this.isTrue = true;
                        this.pService.done();
                        return;
                    }
                }
            }
            // first check if record is in recent searches then show form here
            if (this.lastSearches) {
                for (var i = 0; i < this.lastSearches.length; i++) {
                    if (this.lastSearches[i]['Vehicle Registration Number']
                        .toLowerCase() == this.vehicleNumber.toLowerCase()) {
                        this.vehicleArr.push(this.lastSearches[i]);
                        this.vehicleColor(this.lastSearches[i]['Color']);
                        this.isTrue = true;
                        this.pService.done();
                        return;
                    }
                }
            }
            this.vehicleService.getKpkVehicle(this.vehicleDistrict, this.vehicleRegistered, this.vehicleNumber)
                .then(function (response) {
                _this.vehicleData = response._body;
                if (response._body == null || response._body == '') {
                    _this.pService.done();
                    _this.alertRecord = true;
                }
                else {
                    _this.pService.done();
                    // call function for create object after some delay
                    setTimeout(function () {
                        _this.createObject();
                        _this.vehicleColor(_this.vehicleObject['Color']);
                        _this.recentSearches(true, _this.vehicleObject);
                    }, 5);
                }
            });
        }
        else {
            this.alertTrue = true;
        }
    };
    KpkVehicleComponent.prototype.createObject = function () {
        this.vehicleArr = [];
        this.vehicleObject = {};
        var elements = document.querySelectorAll('div.display-none-html div');
        elements = Array.from(elements);
        elements.splice(0, 2);
        elements.splice(2, 1);
        var property = [];
        var value = [];
        for (var i = 0; i < elements.length; i = i + 2) {
            property.push(elements[i]);
            value.push(elements[i + 1]);
        }
        property.splice(8, 1);
        value.splice(8, 1);
        for (var i = 0; i < property.length; i++) {
            this.vehicleObject[property[i].innerText.slice(0, -1).trim()] = value[i].innerText;
        }
        this.vehicleArr.push(this.vehicleObject);
        // enable for DOM
        this.isTrue = true;
    };
    KpkVehicleComponent.prototype.checkTokenPaid = function (object) {
        var tokenPaid = object['TOKEN PAID UPTO'];
        var year = new Date().getFullYear();
        var month = new Date().getMonth();
        var tokenPaidArr = tokenPaid.split('-');
        var tokenPaidYear = parseInt(tokenPaidArr[2]);
        if ((year <= tokenPaidYear) && (month <= 5)) {
            this.checkDate = true;
        }
        else {
            this.checkDate = false;
        }
    };
    KpkVehicleComponent.prototype.recentSearches = function (check, object) {
        var maxSearches = 10;
        if (check) {
            this.searches = true;
            if (window.localStorage.getItem('kpk_last_search')) {
                this.lastSearches = [];
                this.lastSearches = JSON.parse(window.localStorage.getItem('kpk_last_search'));
                var objCheck = JSON.stringify(object);
                for (var i = 0; i < this.lastSearches.length; i++) {
                    if (objCheck == JSON.stringify(this.lastSearches[i])) {
                        this.lastSearches.splice(i, 1);
                    }
                }
                this.lastSearches.push(object);
                if (this.lastSearches.length > maxSearches) {
                    this.lastSearches.splice(0, 1);
                }
                window.localStorage.setItem('kpk_last_search', JSON.stringify(this.lastSearches));
            }
            else {
                this.lastSearches = [];
                this.lastSearches.push(object);
                window.localStorage.setItem('kpk_last_search', JSON.stringify(this.lastSearches));
            }
        }
        else {
            this.lastSearches = [];
            this.lastSearches = JSON.parse(window.localStorage.getItem('kpk_last_search'));
            if (this.lastSearches) {
                this.searches = true;
            }
        }
    };
    // save data in local storage
    KpkVehicleComponent.prototype.saveData = function (check, object) {
        if (check) {
            this.storeData = true;
            if (this.lastSave) {
                for (var i = 0; i < this.lastSave.length; i++) {
                    if (JSON.stringify(this.lastSave[i]) == JSON.stringify(object)) {
                        this.alertExistSave = true;
                        return;
                    }
                }
            }
            if (window.localStorage.getItem('kpk-store-data')) {
                this.lastSave = [];
                this.lastSave = JSON.parse(window.localStorage.getItem('kpk-store-data'));
                var objCheck = JSON.stringify(object);
                for (var i = 0; i < this.lastSave.length; i++) {
                    if (objCheck == JSON.stringify(this.lastSave[i])) {
                        this.lastSave.splice(i, 1);
                    }
                }
                this.lastSave.unshift(object);
                window.localStorage.setItem('kpk-store-data', JSON.stringify(this.lastSave));
            }
            else {
                this.lastSave = [];
                this.lastSave.unshift(object);
                window.localStorage.setItem('kpk-store-data', JSON.stringify(this.lastSave));
            }
            this.alertSave = true;
        }
        else {
            this.lastSave = [];
            this.lastSave = JSON.parse(window.localStorage.getItem('kpk-store-data'));
            if (this.lastSave == null || this.lastSave == undefined) {
                this.storeData = false;
                return;
            }
            if (this.lastSave.length > 0) {
                this.storeData = true;
            }
            else {
                this.storeData = false;
            }
        }
    };
    // when click on record in recent searches or saved record then 
    // this function will display record
    KpkVehicleComponent.prototype.onSearch = function (object) {
        this.alertSave = false;
        this.alertDelete = false;
        this.alertExistSave = false;
        this.vehicleArr = [];
        this.vehicleArr.push(object);
        // this.forDateColor(object);
        this.isTrue = true;
        this.vehicleColor(object['Color']);
    };
    // its for delte record from saved records
    KpkVehicleComponent.prototype.deleteSave = function (object) {
        var objectCheck = {};
        objectCheck = JSON.stringify(object);
        for (var i = 0; i < this.lastSave.length; i++) {
            if (objectCheck == JSON.stringify(this.lastSave[i])) {
                this.lastSave.splice(i, 1);
                window.localStorage.setItem('kpk-store-data', JSON.stringify(this.lastSave));
            }
        }
        this.alertDelete = true;
        if (this.lastSave.length < 1) {
            this.storeData = false;
        }
    };
    KpkVehicleComponent.prototype.vehicleColor = function (color) {
        console.log(color);
        var colorArr = color.split(" ");
        var secondClr = '';
        var firstClr = colorArr[0].toLowerCase();
        if (colorArr.length > 1) {
            secondClr = colorArr[1].toLowerCase();
        }
        for (var _i = 0, _a = this.colorOptions; _i < _a.length; _i++) {
            var clr = _a[_i];
            if (clr == firstClr) {
                this.colorClass = firstClr;
            }
            if (colorArr.length > 1) {
                if (clr == secondClr) {
                    this.colorClass = secondClr;
                }
            }
        }
    };
    return KpkVehicleComponent;
}());
KpkVehicleComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'kpk-vehicle',
        template: __webpack_require__("../../../../../src/app/components/kpk-vehicle/kpk-vehicle.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/kpk-vehicle/kpk-vehicle.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_vehicle_service__["a" /* VehicleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_vehicle_service__["a" /* VehicleService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ng2_progressbar__["b" /* NgProgressService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ng2_progressbar__["b" /* NgProgressService */]) === "function" && _b || Object])
], KpkVehicleComponent);

var _a, _b;
//# sourceMappingURL=kpk-vehicle.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div.login-user{\n\tpadding-top: 35px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"login-user\">\n    <form class=\"form-horizontal\" (ngSubmit)=\"onSubmit(); formSubmit.reset();\"\t#formSubmit=\"ngForm\">\n\t    \n\t    <div class=\"form-group\">\n\t      <label class=\"control-label col-sm-2\" for=\"userName\">User Name:</label>\n\t      <div class=\"col-sm-10\">\n\t        <input type=\"text\" class=\"form-control\" name=\"userName\" [(ngModel)]=\"userName\" id=\"userName\" placeholder=\"Enter Username\">\n\t      </div>\n\t    </div>\n\n\t    <div class=\"form-group\">\n\t      <label class=\"control-label col-sm-2\" for=\"password\">Password:</label>\n\t      <div class=\"col-sm-10\">\n\t        <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"password\"  id=\"password\" placeholder=\"Enter Password\">\n\t      </div>\n\t    </div>\n\n\t    \n\t    <div class=\"form-group\"> \n\t      <div class=\"col-sm-offset-2 col-sm-10\">\n\t        <button type=\"submit\" class=\"btn btn-primary\">Login</button>\n\t      </div>\n\t    </div>\n\t</form>\n  </div>  \n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = (function () {
    function LoginComponent(validateService, flashMessagesService, authService, router) {
        this.validateService = validateService;
        this.flashMessagesService = flashMessagesService;
        this.authService = authService;
        this.router = router;
    }
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        var user = {
            userName: this.userName,
            password: this.password
        };
        if (!this.validateService.validateLogin(user)) {
            this.flashMessagesService.show('Please fill in all fields!', {
                cssClass: 'alert-danger',
                timeout: 5000
            });
            return false;
        }
        this.authService.authenticateUser(user)
            .subscribe(function (data) {
            if (data.success) {
                _this.authService.storeUserInfo(data.user, data.token);
                _this.flashMessagesService.show('You are logged In!', {
                    cssClass: 'alert-success',
                    timeout: 5000
                });
                _this.router.navigate(['/punjab']);
            }
            else {
                _this.flashMessagesService.show(data.msg, {
                    cssClass: 'alert-danger',
                    timeout: 5000
                });
            }
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'user-register',
        template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_validate_service__["a" /* ValidateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _d || Object])
], LoginComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div.register-user{\n\tpadding-top: 35px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"register-user\">\n    <form class=\"form-horizontal\" (ngSubmit)=\"onSubmit(); formSubmit.reset();\" #formSubmit=\"ngForm\">\n    <div class=\"form-group\">\n      <label class=\"control-label col-sm-2\" for=\"firstName\">First Name:</label>\n      <div class=\"col-sm-10\">\n        <input type=\"text\" class=\"form-control\" name=\"firstName\" [(ngModel)]=\"firstName\" id=\"firstName\" placeholder=\"Enter First Name\">\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label class=\"control-label col-sm-2\" for=\"lastName\">Last Name:</label>\n      <div class=\"col-sm-10\">\n        <input type=\"text\" class=\"form-control\" name=\"lastName\" [(ngModel)]=\"lastName\" id=\"lastName\" placeholder=\"Enter Last Name\">\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label class=\"control-label col-sm-2\" for=\"userName\">User Name:</label>\n      <div class=\"col-sm-10\">\n        <input type=\"text\" class=\"form-control\" name=\"userName\" [(ngModel)]=\"userName\" id=\"userName\" placeholder=\"Enter Username\">\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label class=\"control-label col-sm-2\" for=\"email\">Email:</label>\n      <div class=\"col-sm-10\">\n        <input type=\"text\" class=\"form-control\" name=\"email\" [(ngModel)]=\"email\" id=\"email\" placeholder=\"Enter email\">\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label class=\"control-label col-sm-2\" for=\"password\">Password:</label>\n      <div class=\"col-sm-10\">\n        <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"password\"  id=\"password\" placeholder=\"Enter Password\">\n      </div>\n    </div>\n\n    \n    <div class=\"form-group\"> \n      <div class=\"col-sm-offset-2 col-sm-10\">\n        <button type=\"submit\" class=\"btn btn-primary\">Register</button>\n      </div>\n    </div>\n  </form>\n  </div>  \n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = (function () {
    function RegisterComponent(validateService, flashMessagesService, authService, router) {
        this.validateService = validateService;
        this.flashMessagesService = flashMessagesService;
        this.authService = authService;
        this.router = router;
    }
    RegisterComponent.prototype.onSubmit = function () {
        var _this = this;
        var user = {
            firstName: this.firstName,
            lastName: this.lastName,
            userName: this.userName,
            password: this.password,
            email: this.email
        };
        // check for validation
        if (!this.validateService.validateUser(user)) {
            this.flashMessagesService.show('Please fill in all fields!', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        // check for email valid format
        if (!this.validateService.validateEmail(user.email)) {
            this.flashMessagesService.show('Please use valid Email!', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        this.authService.registerUser(user)
            .subscribe(function (data) {
            if (data.success) {
                _this.flashMessagesService.show(user.firstName + ' you are registerd and can login now!', { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/login']);
            }
            else {
                _this.flashMessagesService.show(user.firstName + '! something went wrong please try again', { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['/register']);
            }
        });
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'user-register',
        template: __webpack_require__("../../../../../src/app/components/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/register/register.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_validate_service__["a" /* ValidateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _d || Object])
], RegisterComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/sindh-vehicle/sindh-vehicle.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SindhVehicleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SindhVehicleComponent = (function () {
    function SindhVehicleComponent() {
    }
    return SindhVehicleComponent;
}());
SindhVehicleComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        // moduleId: module.id,
        selector: 'sindh-vehicle',
        template: "\n\t\t\t<div class=\"container padding-top\">\n\t\t\t  <div class=\"embed-responsive embed-responsive-16by9\">\n\t\t\t    <iframe class=\"embed-responsive-item\" src=\"http://www.excise.gos.pk/vehiclefind/\"></iframe>\n\t\t\t  </div>\n\t\t\t</div>\n\t"
    })
], SindhVehicleComponent);

//# sourceMappingURL=sindh-vehicle.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/vehicle/vehicle.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div.clear{\n\tclear: both;\n}\n\ndiv.search-form {\n    background-color: #eee;\n    padding: 36px;\n    margin-top: 30px;\n    box-shadow: 2px 2px 6px 1px #9a9797;\n}\n\ninput.search-btn {\n    margin-top: 8px;\n}\n\ndiv.new-table {\n    background-color: #fff;\n    padding: 36px;\n    margin-top: 30px;\n    box-shadow: 2px 2px 6px 1px #9a9797;\n}\n\ndiv.ent-info-div {\n    background-color: #eee;\n    padding: 36px;\n    margin-top: 30px;\n    margin-bottom: -29px;\n    box-shadow: 2px 2px 6px 1px #9a9797;\n}\n\ntd.token-paid{\n\tbackground-color: #62f442;\n\t/*color: #fff;*/\t\n}\n\ntd.token-unpaid {\n\tbackground-color: #cc0216;\n\tcolor: #fff;\n}\n\nspan.color-span {\n    position: relative;\n    left: 0;\n    top: 3px;\n    display: inline-block;\n    width: 30px;\n    height: 16px;\n    border: 1px solid;\n}\n\nspan.red{\n\tbackground-color: red;\t\n}\nspan.white{\n\tbackground-color: white;\t\n}\nspan.gold{\n\tbackground-color: gold;\t\n}\nspan.black{\n\tbackground-color: black;\t\n}\nspan.green{\n\tbackground-color: green;\t\n}\nspan.purple{\n\tbackground-color: purple;\t\n}\nspan.yellow{\n\tbackground-color: yellow;\t\n}\nspan.maroon{\n\tbackground-color: maroon;\t\n}\nspan.golden{\n\tbackground-color: #FFD700;\t\n}\nspan.blue{\n\tbackground-color: blue;\t\n}\nspan.brown{\n\tbackground-color: brown;\t\n}\nspan.cream{\n\tbackground-color: #fffdd0;\t\n}\nspan.gray{\n\tbackground-color: gray;\t\n}\nspan.orange{\n\tbackground-color: orange;\t\n}span.pink{\n\tbackground-color: pink;\t\n}\n\ndiv.recent-searches {\n    margin: 30px 0;\n    padding: 10px;\n    text-align: center;\n}\n\nul.ol-searches {\n    list-style: none;\n    padding: 0;\n    margin: 0;\n}\n\nli.li-searches span.list-index {\n    background-color: #2196F3;\n    position: relative;\n    z-index: 2;\n    border-radius: 50%;\n    border: 6px solid #ffffff;\n    outline: none;\n    box-shadow: none;\n    width: 50px;\n    height: 50px;\n    display: inline-block;\n    text-align: center;\n    line-height: 38px;\n    color: #fff;\n\n}\n\nli.li-searches span.list-data {\n    background-color: #eee;\n    padding: 10px 0;\n    text-align: center;\n    position: relative;\n    left: -14px;\n    display: inline-block;\n    width: 250px;\n}\n\ndiv.recent-searches span {\n    color: #607D8B;\n    font-size: 16px;\n}\n\ndiv.recent-searches span.list-data:hover {\n    background-color: #607D8B;\n    cursor: pointer;\n    border-radius: 3px;\n    color: #eee;\n    transition: linear all 0.25s;\n    cursor: pointer;\n}\n\nh2.h2-searches {\n    margin: 0;\n    font-size: 24px;\n    text-align: center;\n    color: #2196f3;\n    font-weight: bold;\n}\n\nol.ol-searches {\n    padding-left: 15px;\n}\n\nli.li-searches {\n    color: #071879;\n    cursor: pointer;\n}\n\nli.li-searches:hover {\n    color: #03A9F4;\n    transition: all linear 0.25s;\n}\n\n\ndiv.recent-save {\n    padding: 10px;\n    text-align: center;\n}\n\nh2.h2-save {\n    margin: 0;\n    font-size: 24px;\n    text-align: center;\n    color: #2196f3;\n    font-weight: bold;\n}\n\nul.ol-save {\n    list-style: none;\n    padding: 0;\n    margin: 0;\n}\n\nli.li-save {\n    color: #071879;\n    cursor: pointer;\n}\n\nli.li-save span.list-index {\n    background-color: #2196F3;\n    position: relative;\n    z-index: 2;\n    border-radius: 50%;\n    border: 6px solid #ffffff;\n    outline: none;\n    box-shadow: none;\n    width: 50px;\n    height: 50px;\n    display: inline-block;\n    text-align: center;\n    line-height: 38px;\n    color: #fff;\n\n}\n\nli.li-save span.list-data {\n    background-color: #eee;\n    padding: 10px 0;\n    text-align: center;\n    position: relative;\n    left: -14px;\n    display: inline-block;\n    width: 250px;\n    font-size: 16px;\n    color: #607D8B;\n}\n\nli.li-save span.list-data:hover {\n    color: #eee;\n    background-color: #607D8B;\n    transition: all linear 0.25s;\n    cursor: pointer;\n}\n\nbutton.delete-save {\n    position: relative;\n    left: -14px;\n    padding: 12px;\n    border: none;\n}\n\nbutton.delete-save:hover{\n\tbackground-color: #607D8B;\n    color: #eee;\n    transition: linear all 0.25s;\n    cursor: pointer;\n}\n\ndiv.alertSave {\n\tmargin-top: 16px;\n}\n\ndiv.alertDelete {\n    margin-top: 15px;\n}\n\n\t\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/vehicle/vehicle.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <ng-progress></ng-progress> -->\n<div class=\"container padding-top\">\n\t<div class=\"form-wrapper col-md-6\">\n\t\t<h2>Punjab Vehicle Verificatoin</h2>\n\t\t<div class=\"ent-info-div\">\n\t        You can try Different Combinations e.g;<br>\n\t        ABC 000 ..................................LXZ 123<br>\n\t        ABC 0000 ................................LXZ 0123<br>\n\t        ABC 0000 ................................LXZ 1111<br>\n\t        ABC-00-0000 ..........................RIA-07-1111\n\t    </div>\n\t\t<div class=\"search-form\">\n\t\t\t<form #vehicleForm=\"ngForm\" >\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label for=\"vehicle\">Vehicle Number:</label>\n\t\t\t\t\t<input type=\"text\" [(ngModel)]=\"vehicleNumber\" class=\"form-control\" name=\"vehicleNumber\" id=\"vehicle\" placeholder=\"Enter vehicle number\">\n\t\t\t\t\t<input (click)=\"onSubmit(); vehicleForm.reset()\"  type=\"button\" class=\"search-btn btn btn-primary\" value=\"Search\" /> \n\t\t\t\t</div>\n\t\t\t</form>\n\t\t\t<div *ngIf=\"alertTrue\" class=\"alert alert-danger alert-dismissable fade in\">\n\t\t\t\t<a (click)=\"alertTrue = false\" href=\"\" class=\"close\" data-dismiss=\"alert\" aria-label=\"close\">&times;</a>\n\t\t\t\t Please insert format one of above\n\t\t\t</div>\n\t\t\t<div *ngIf=\"alertRecord\" class=\"alert alert-info alert-dismissable fade in\">\n\t\t\t\t<a (click)=\"alertRecord = false\" href=\"\" class=\"close\" data-dismiss=\"alert\" aria-label=\"close\">&times;</a>\n\t\t\t\tRecord not found, please insert a valid vehicle number\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div style=\"display: none;\"  [innerHTML]=\"vehicleData\"> </div>\n\t\t<div class=\"new-table\" *ngIf=\"isTrue\" >\n\t\t\t<table class=\"table table-striped\">\n\t\t\t\t<thead>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<th>Name</th>\n\t\t\t\t\t\t<th>Detail</th>\n\t\t\t\t\t</tr>\n\t\t\t\t</thead>\n\t\t\t\t<tbody *ngFor=\"let obj of vehicleArr\">\t\n\t\t\t\t\t<tr *ngFor=\"let key of obj | vehiclePipe \">\n\t\t\t\t\t\t<td *ngIf=\"key!='_id'\"> {{key}} </td>\n\t\t\t\t\t\t<td *ngIf=\"key!=='_id'\" [class.token-paid]='checkDate && key == \"Token Tax Paid upto:\"'\n\t\t\t\t\t\t[class.token-unpaid]='!checkDate && key == \"Token Tax Paid upto:\"'\n\t\t\t\t\t\t>\n\t\t\t\t\t\t<span *ngIf=\"key=='Color:'\" class=\"{{colorClass}} color-span\" > </span> \n\t\t\t\t\t\t{{obj[key]}} \t\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t</tbody>\n\t\t\t</table>\n\t\t\t<button *ngIf=\"authService.loggedIn()\"  (click)=\"saveData(vehicleArr[0])\" class=\"btn btn-primary\" >Save</button>\n\t\t\t<button (click)=\"isTrue = false\" class=\"btn btn-primary\" >Close</button>\n\t\t\t\n\n\t\t\t<div *ngIf=\"!authService.loggedIn()\" class=\"alert alert-info alert-dismissable fade in alertSave\">\n\t\t\t\t<a (click)=\"alertSave = false\" href=\"\" class=\"close\" data-dismiss=\"alert\" aria-label=\"close\">&times;</a>\n\t\t\t\tFor save your vehicle please Register\n\t\t\t</div>\n\n\n\t\t\t<div *ngIf=\"alertSave\" class=\"alert alert-success alert-dismissable fade in alertSave\">\n\t\t\t\t<a (click)=\"alertSave = false\" href=\"\" class=\"close\" data-dismiss=\"alert\" aria-label=\"close\">&times;</a>\n\t\t\t\tYour record has been saved successfully\n\t\t\t</div>\n\t\t\t<div *ngIf=\"alertExistSave\" class=\"alert alert-info alert-dismissable fade in alertSave\">\n\t\t\t\t<a (click)=\"alertExistSave = false\" href=\"\" class=\"close\" data-dismiss=\"alert\" aria-label=\"close\">&times;</a>\n\t\t\t\t\tRecord is already saved in database\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<div class=\"local-storage-data col-md-6\">\n\t\t<div class=\"recent-searches-wrapper\">\n\t\t\t<div *ngIf=\"searches\" class=\"recent-searches\">\n\t\t\t\t<h2 class=\"h2-searches\">Recent Searches</h2>\n\t\t\t\t<ul class=\"ol-searches\">\n\t\t\t\t\t<li class=\"li-searches\" *ngFor=\"let lastSearch of lastSearches | reverse; let i=index \" (click)=\"onSearch(lastSearch)\" >\n\t\t\t\t\t<span class=\"list-index\">{{i+1}}</span>\n\t\t\t\t\t<span class=\"list-data\">\n\t\t\t\t\t\t{{lastSearch['Make Name:'] | capitalize}}   {{lastSearch['Registration Number:'] | capitalize}}\t\n\t\t\t\t\t</span>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\n\t\t\n\n\t\t<div class=\"recent-save-wrapper\">\n\t\t\t<div *ngIf=\"authService.loggedIn()\">\n\t\t\t\t<div *ngIf=\"storeData\" class=\"recent-save\">\n\t\t\t\t\t<h2 class=\"h2-save\">Recent Saved</h2>\n\t\t\t\t\t<ul class=\"ol-save\">\n\t\t\t\t\t\t<li class=\"li-save\" *ngFor=\"let save of vehicleFrDb; let i = index\" (click)=\"onSearch(save)\"> <span class=\"list-index\">{{i+1}}</span> <span class=\"list-data\"> {{save['Make Name:'] | capitalize}}   {{save['Registration Number:'] | capitalize}} </span>  <button class=\"delete-save\" (click)=\"deleteSave(save._id); $event.stopPropagation()\">x</button> </li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t\t<div *ngIf=\"alertDelete\" class=\"alert alert-info alert-dismissable fade in alertDelete\">\n\t\t\t\t\t<a (click)=\"alertDelete = false\" href=\"\" class=\"close\" data-dismiss=\"alert\" aria-label=\"close\">&times;</a>\n\t\t\t\t\tYour record has been deleted successfully\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\t\n\t</div>\n\t\n\n\n\n\t<div class=\"clear\"></div>\n</div>\t\t"

/***/ }),

/***/ "../../../../../src/app/components/vehicle/vehicle.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VehicleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_vehicle_service__ = __webpack_require__("../../../../../src/app/services/vehicle.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_progressbar__ = __webpack_require__("../../../../ng2-progressbar/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var VehicleComponent = (function () {
    function VehicleComponent(vehicleService, pService, authService) {
        this.vehicleService = vehicleService;
        this.pService = pService;
        this.authService = authService;
        this.lastSearches = [];
        this.lastSave = [];
        this.vehicleNumber = '';
        this.vehicleData = '';
        this.vehicleObj = {};
        this.vehicleArr = [];
        this.vehColor = '';
        this.vehicleFrDb = [];
        this.isTrue = false;
        this.alertTrue = false;
        this.alertRecord = false;
        this.checkDate = false;
        this.searches = false;
        this.storeData = false;
        this.alertSave = false;
        this.alertDelete = false;
        this.alertExistSave = false;
        this.colorClass = '';
        this.colorOptions = ['red', 'white', 'gold', 'black', 'green', 'purple', 'yellow', 'maroon',
            'golden', 'blue', 'brown', 'cream', 'gray', 'orange', 'pink', 'silver'];
    }
    VehicleComponent.prototype.ngOnInit = function () {
        this.recentSearches(false);
        // this.saveData(false);
        // console.log(this.authService.loggedIn());
        if (this.authService.loggedIn()) {
            this.getPunjabVehFrDb();
        }
    };
    VehicleComponent.prototype.onSubmit = function () {
        var _this = this;
        this.alertSave = false;
        this.alertDelete = false;
        this.isTrue = false;
        this.alertRecord = false;
        this.alertExistSave = false;
        this.vehicleArr = [];
        var regex = /([a-zA-z]){3}(\s)(\d){3,4}|([a-zA-z]){3}(\s|-)(\d){2}(-)(\d){4}$/g;
        if (regex.test(this.vehicleNumber)) {
            this.alertTrue = false;
            // progress bar start
            this.pService.start();
            // first check if record is save in saved records if yes then show
            if (this.lastSave) {
                for (var i = 0; i < this.lastSave.length; i++) {
                    if (this.lastSave[i]['Registration Number:'].toLowerCase() == this.vehicleNumber.toLowerCase()) {
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
            if (this.lastSearches) {
                for (var i = 0; i < this.lastSearches.length; i++) {
                    if (this.lastSearches[i]['Registration Number:'].toLowerCase() == this.vehicleNumber.toLowerCase()) {
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
                .then(function (response) {
                _this.vehicleData = JSON.parse(response._body);
                if (response._body == '' || response._body == null) {
                    _this.pService.done();
                    _this.alertRecord = true;
                }
                else {
                    _this.pService.done(); // end progress bar
                    setTimeout(function () {
                        // creating object
                        _this.vehicleObj = {};
                        var prop = document.querySelectorAll('td:first-child');
                        var value = document.querySelectorAll('td:not(:first-child)');
                        var propArray = Array.from(prop);
                        propArray.splice(0, 1);
                        propArray.splice(9, 1);
                        prop = propArray;
                        for (var i = 0; i < prop.length; i++) {
                            _this.vehicleObj[prop[i].innerHTML] = value[i].innerHTML;
                            // console.log(this.vehicleObj);
                            // checking for token paid or not
                            if (prop[i].innerHTML == 'Token Tax Paid upto:') {
                                var tokenPaid = value[i].innerHTML;
                                var year = new Date().getFullYear();
                                var month = new Date().getMonth();
                                var tokenPaidArr = tokenPaid.split(' ');
                                var tokenPaidYear = parseInt(tokenPaidArr[1]);
                                if ((year <= tokenPaidYear ||
                                    tokenPaid == 'LIFETIME') && (month <= 5 || tokenPaid == 'LIFETIME')) {
                                    _this.checkDate = true;
                                }
                                else {
                                    _this.checkDate = false;
                                }
                            }
                            // get vehicle color
                            if (prop[i].innerHTML == 'Color:') {
                                _this.vehColor = value[i].innerHTML;
                            }
                        }
                        _this.recentSearches(true, _this.vehicleObj);
                        _this.vehicleArr.push(_this.vehicleObj);
                        // console.log(this.vehicleObj);
                        _this.isTrue = true;
                        _this.vehicleColor(_this.vehColor);
                    }, 5);
                }
            });
        }
        else {
            this.alertTrue = true;
        }
        var input = "true";
        var boolVar = input;
    };
    VehicleComponent.prototype.recentSearches = function (check, obj) {
        var maxSearches = 10;
        if (check) {
            this.searches = true;
            if (window.localStorage.getItem('last_search')) {
                this.lastSearches = [];
                this.lastSearches = JSON.parse(window.localStorage.getItem('last_search'));
                var objCheck = JSON.stringify(obj);
                for (var i = 0; i < this.lastSearches.length; i++) {
                    if (objCheck == JSON.stringify(this.lastSearches[i])) {
                        this.lastSearches.splice(i, 1);
                    }
                }
                this.lastSearches.push(obj);
                if (this.lastSearches.length > maxSearches) {
                    this.lastSearches.splice(0, 1);
                }
                window.localStorage.setItem('last_search', JSON.stringify(this.lastSearches));
            }
            else {
                this.lastSearches = [];
                this.lastSearches.push(obj);
                window.localStorage.setItem('last_search', JSON.stringify(this.lastSearches));
            }
        }
        else {
            this.lastSearches = [];
            this.lastSearches = JSON.parse(window.localStorage.getItem('last_search'));
            if (this.lastSearches) {
                this.searches = true;
            }
        }
    };
    VehicleComponent.prototype.vehicleColor = function (color) {
        var colorArr = color.split(" ");
        var secondClr = '';
        var firstClr = colorArr[0].toLowerCase();
        if (colorArr.length > 1) {
            secondClr = colorArr[1].toLowerCase();
        }
        for (var _i = 0, _a = this.colorOptions; _i < _a.length; _i++) {
            var clr = _a[_i];
            if (clr == firstClr) {
                this.colorClass = firstClr;
            }
            if (colorArr.length > 1) {
                if (clr == secondClr) {
                    this.colorClass = secondClr;
                }
            }
        }
    };
    VehicleComponent.prototype.onSearch = function (object) {
        this.alertSave = false;
        this.alertDelete = false;
        this.alertExistSave = false;
        this.vehicleArr = [];
        this.vehicleArr.push(object);
        this.forDateColor(object);
        this.isTrue = true;
        this.vehicleColor(this.vehColor);
    };
    VehicleComponent.prototype.forDateColor = function (object) {
        var tokenPaid = object['Token Tax Paid upto:'];
        var year = new Date().getFullYear();
        var month = new Date().getMonth();
        var tokenPaidArr = tokenPaid.split(' ');
        var tokenPaidYear = parseInt(tokenPaidArr[1]);
        if ((year <= tokenPaidYear ||
            tokenPaid == 'LIFETIME') && (month <= 5 || tokenPaid == 'LIFETIME')) {
            this.checkDate = true;
        }
        else {
            this.checkDate = false;
        }
        this.vehColor = object['Color:'];
    };
    // if this work in the service then that approach is good
    VehicleComponent.prototype.saveData = function (object) {
        var _this = this;
        // save data in mongodb database
        // save userId for every record
        var user = JSON.parse(window.localStorage.getItem('user'));
        object.userId = user.id;
        this.vehicleService.savePunjabData(object)
            .subscribe(function (res) {
            // first check record exist or not in the db
            if (res == 'recordExist') {
                _this.alertExistSave = true;
                return;
            }
            else {
                _this.vehicleService.getPunjabVehicles(user.id)
                    .subscribe(function (vehicles) {
                    _this.vehicleFrDb = [];
                    _this.vehicleFrDb = vehicles;
                    // for rename object properties
                    _this.renameObjProp(_this.vehicleFrDb);
                    _this.storeData = true; // its for display block	
                    _this.alertSave = true; // alert for record saved
                });
            }
        });
    };
    // retrieving punjab vehicles from db
    VehicleComponent.prototype.getPunjabVehFrDb = function () {
        var _this = this;
        var user = JSON.parse(window.localStorage.getItem('user'));
        var userId = user.id;
        this.vehicleFrDb = [];
        this.vehicleService.getPunjabVehicles(userId)
            .subscribe(function (vehicles) {
            _this.vehicleFrDb = vehicles;
            // for rename object properties
            _this.renameObjProp(_this.vehicleFrDb);
            if (_this.vehicleFrDb == null || _this.vehicleFrDb == undefined) {
                _this.storeData = false;
                return;
            }
            if (_this.vehicleFrDb.length > 0) {
                _this.storeData = true;
            }
            else {
                _this.storeData = false;
            }
        });
    };
    VehicleComponent.prototype.deleteSave = function (id) {
        var _this = this;
        this.vehicleService.deletePunjabVehicle(id)
            .subscribe(function (res) {
            if (res.n == 1) {
                for (var i = 0; i < _this.vehicleFrDb.length; i++) {
                    for (var prop in _this.vehicleFrDb[i]) {
                        if (_this.vehicleFrDb[i][prop] == id) {
                            _this.vehicleFrDb.splice(i, 1);
                            _this.alertDelete = true;
                            if (_this.vehicleFrDb.length < 1) {
                                _this.storeData = false;
                            }
                        }
                    }
                }
            }
            if (_this.vehicleFrDb.length < 1) {
                _this.storeData = false;
            }
        });
    };
    // create function for rename object property names, because
    // in db object prop name without spaces but here in front end code 
    // prop names are with spaces and front end code had written befor 
    // backend code
    // function for rename object properties
    VehicleComponent.prototype.renameObjProp = function (objects) {
        for (var _i = 0, objects_1 = objects; _i < objects_1.length; _i++) {
            var arr = objects_1[_i];
            for (var prop in arr) {
                switch (prop) {
                    case "regNo":
                        Object.defineProperty(arr, 'Registration Number:', Object.getOwnPropertyDescriptor(arr, prop));
                        delete arr[prop];
                        break;
                    case "chassisNo":
                        Object.defineProperty(arr, 'Chassis Number:', Object.getOwnPropertyDescriptor(arr, prop));
                        delete arr[prop];
                        break;
                    case "enginNo":
                        Object.defineProperty(arr, 'Engine Number:', Object.getOwnPropertyDescriptor(arr, prop));
                        delete arr[prop];
                        break;
                    case "makeName":
                        Object.defineProperty(arr, 'Make Name:', Object.getOwnPropertyDescriptor(arr, prop));
                        delete arr[prop];
                        break;
                    case "regDate":
                        Object.defineProperty(arr, 'Registration Date:', Object.getOwnPropertyDescriptor(arr, prop));
                        delete arr[prop];
                        break;
                    case "vehPrice":
                        Object.defineProperty(arr, 'Vehicle Price:', Object.getOwnPropertyDescriptor(arr, prop));
                        delete arr[prop];
                        break;
                    case "color":
                        Object.defineProperty(arr, 'Color:', Object.getOwnPropertyDescriptor(arr, prop));
                        delete arr[prop];
                        break;
                    case "tokenPaid":
                        Object.defineProperty(arr, 'Token Tax Paid upto:', Object.getOwnPropertyDescriptor(arr, prop));
                        delete arr[prop];
                        break;
                    case "ownerName":
                        Object.defineProperty(arr, 'Owner Name:', Object.getOwnPropertyDescriptor(arr, prop));
                        delete arr[prop];
                        break;
                    case "ownerFather":
                        Object.defineProperty(arr, 'Father Name:', Object.getOwnPropertyDescriptor(arr, prop));
                        delete arr[prop];
                        break;
                    case "ownerCity":
                        Object.defineProperty(arr, 'Owner City:', Object.getOwnPropertyDescriptor(arr, prop));
                        delete arr[prop];
                        break;
                    case "model":
                        Object.defineProperty(arr, 'Model:', Object.getOwnPropertyDescriptor(arr, prop));
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
    };
    return VehicleComponent;
}());
VehicleComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'my-vehicle',
        template: __webpack_require__("../../../../../src/app/components/vehicle/vehicle.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/vehicle/vehicle.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_vehicle_service__["a" /* VehicleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_vehicle_service__["a" /* VehicleService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ng2_progressbar__["b" /* NgProgressService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ng2_progressbar__["b" /* NgProgressService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === "function" && _c || Object])
], VehicleComponent);

var _a, _b, _c;
//# sourceMappingURL=vehicle.component.js.map

/***/ }),

/***/ "../../../../../src/app/modules/vehicle-routing/vehicle-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VehicleRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_vehicle_vehicle_component__ = __webpack_require__("../../../../../src/app/components/vehicle/vehicle.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_islam_vehicle_islam_vehicle_component__ = __webpack_require__("../../../../../src/app/components/islam-vehicle/islam-vehicle.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_kpk_vehicle_kpk_vehicle_component__ = __webpack_require__("../../../../../src/app/components/kpk-vehicle/kpk-vehicle.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_sindh_vehicle_sindh_vehicle_component__ = __webpack_require__("../../../../../src/app/components/sindh-vehicle/sindh-vehicle.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_register_register_component__ = __webpack_require__("../../../../../src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






// loading authentication components


var routes = [
    // { path: '', component: AppComponent },
    { path: '', redirectTo: '/islamabad', pathMatch: 'full' },
    { path: 'punjab', component: __WEBPACK_IMPORTED_MODULE_2__components_vehicle_vehicle_component__["a" /* VehicleComponent */] },
    { path: 'islamabad', component: __WEBPACK_IMPORTED_MODULE_3__components_islam_vehicle_islam_vehicle_component__["a" /* IslamVehicleComponent */] },
    { path: 'kpk', component: __WEBPACK_IMPORTED_MODULE_4__components_kpk_vehicle_kpk_vehicle_component__["a" /* KpkVehicleComponent */] },
    { path: 'sindh', component: __WEBPACK_IMPORTED_MODULE_5__components_sindh_vehicle_sindh_vehicle_component__["a" /* SindhVehicleComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_6__components_register_register_component__["a" /* RegisterComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__["a" /* LoginComponent */] }
];
var VehicleRoutingModule = (function () {
    function VehicleRoutingModule() {
    }
    return VehicleRoutingModule;
}());
VehicleRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]
        ]
    })
], VehicleRoutingModule);

//# sourceMappingURL=vehicle-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/pipes/capitalize.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CapitalizePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// import {PipeTransform} from "angular2/core";
var CapitalizePipe = (function () {
    function CapitalizePipe() {
    }
    CapitalizePipe.prototype.transform = function (value) {
        if (value) {
            value = value.trim();
            return value.charAt(0).toUpperCase() + value.substr(1).toLowerCase();
        }
        return value;
    };
    return CapitalizePipe;
}());
CapitalizePipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'capitalize'
    })
], CapitalizePipe);

//# sourceMappingURL=capitalize.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/pipes/reverse.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReversePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ReversePipe = (function () {
    function ReversePipe() {
    }
    ReversePipe.prototype.transform = function (value) {
        return value.slice().reverse();
    };
    return ReversePipe;
}());
ReversePipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'reverse'
    })
], ReversePipe);

//# sourceMappingURL=reverse.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/pipes/vehicle.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VehiclePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var VehiclePipe = (function () {
    function VehiclePipe() {
    }
    VehiclePipe.prototype.transform = function (value) {
        var keys = [];
        for (var prop in value) {
            keys.push(prop);
        }
        return keys;
    };
    return VehiclePipe;
}());
VehiclePipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'vehiclePipe' })
], VehiclePipe);

//# sourceMappingURL=vehicle.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// for specific link show


var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
    }
    // for registeration
    AuthService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('ContentType', 'appliction/json');
        var url = 'api/register';
        return this.http.post(url, user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // for authentication
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('ContentType', 'appliction/json');
        var url = 'api/authenticate';
        return this.http.post(url, user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // builtIn function of angular2-jwt in tokenNotExpired module 
    AuthService.prototype.loggedIn = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__["tokenNotExpired"])();
    };
    // for store user token and info localstorage
    AuthService.prototype.storeUserInfo = function (user, token) {
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    // for logout
    AuthService.prototype.logoutUser = function () {
        this.authToken = null;
        this.user = null;
        localStorage.removeItem('token');
        localStorage.removeItem('user');
    };
    return AuthService;
}());
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], AuthService);

var _a;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/validate.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ValidateService = (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateUser = function (user) {
        if (user.firstName == undefined || user.lastName == undefined || user.userName == undefined || user.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    // for login
    ValidateService.prototype.validateLogin = function (user) {
        if (user.userName == undefined || user.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    return ValidateService;
}());
ValidateService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], ValidateService);

//# sourceMappingURL=validate.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/vehicle.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VehicleService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { NgProgressService } from 'ng2-progressbar';


var VehicleService = (function () {
    function VehicleService(http) {
        this.http = http;
        // private vehicleUrl = 'http://www.mtmis.excise-punjab.gov.pk/';
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'ContentType': 'application/json' });
    }
    // web scrapping for punjab vehicles
    VehicleService.prototype.getVehicle = function (data) {
        var vehicleUrl = "api/punjabScrape/" + data;
        // request started
        // this.pService.start();
        return this.http.post(vehicleUrl, { headers: this.headers })
            .toPromise()
            .then(function (response) { return response; })
            .catch(this.handleError);
    };
    VehicleService.prototype.getIslamabadVehicle = function (firstNum, lastNum) {
        var vehicleUrl = "islamVehicle.php?vhlno1=" + firstNum + "&vhlno2=" + lastNum;
        return this.http.post(vehicleUrl, { headers: this.headers })
            .toPromise()
            .then(function (response) { return response; })
            .catch(this.handleError);
    };
    VehicleService.prototype.getKpkVehicle = function (district, registered, vehicleNumber) {
        var vehicleUrl = "http://127.0.0.1/kpkVehicle.php?district=" + district + "&registered=" + registered + "&vehicleNumber=" + vehicleNumber;
        return this.http.post(vehicleUrl, { headers: this.headers })
            .toPromise()
            .then(function (response) { return response; })
            .catch(this.handleError);
    };
    // store punjab vehicle record in database
    VehicleService.prototype.savePunjabData = function (object) {
        var headers = this.headers;
        var url = 'api/punjabVehicle';
        return this.http.post(url, JSON.parse(JSON.stringify(object || null)), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // retrieve punjab vehicles from database
    VehicleService.prototype.getPunjabVehicles = function (id) {
        var url = "api/punjabVehicles/" + id;
        return this.http.get(url)
            .map(function (res) { return res.json(); });
    };
    // remove record from database
    VehicleService.prototype.deletePunjabVehicle = function (id) {
        var url = "api/punjabVehicle/" + id;
        return this.http.delete(url)
            .map(function (res) { return res.json(); });
    };
    VehicleService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return VehicleService;
}());
VehicleService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], VehicleService);

var _a;
//# sourceMappingURL=vehicle.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map