"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var task_services_1 = require("../../services/task.services");
var CurrencyComponent = (function () {
    /**
     * @method Constructor
     * @description [Overview]
     * @param {param} options - value of selected option (from country name)
     * @return void
     */
    function CurrencyComponent(CurrencyCountries) {
        var _this = this;
        this.CurrencyCountries = CurrencyCountries;
        this.currencyc = [];
        this.currencyValues = [];
        this.targetCountry = 'JPY-Japanese yen';
        var targetCountry = this.targetCountry;
        this.fromCountry = "AUD-Australian dollar";
        this.fromVal = 1;
        this.currencyc = this.CurrencyCountries.currencyList;
        this.CurrencyCountries.getCurrencyCountry(this.currencyc[0].cc).subscribe(function (currencyValues) {
            _this.currencyValues = currencyValues;
            console.log(_this.currencyValues);
            _this.targetVal = currencyValues.rates[targetCountry.substr(0, 3)] * _this.fromVal;
            console.log("target values" + _this.targetVal);
        });
    }
    /**
     * @method changeCountryFrom
     * @description [Overview] Functionality of change currency country from
     * @param {param} options - value of selected option (from country name)
     * @return void
     */
    CurrencyComponent.prototype.changeCountryFrom = function (options) {
        var _this = this;
        console.log("change country option full value" + options);
        var option = options.substr(0, 3);
        console.log("change country option value after substr" + option);
        var targetCountry = this.targetCountry;
        if (this.fromCountry == this.targetCountry) {
            this.targetVal = this.fromVal;
            console.log("From and Target country is same");
            this.CurrencyCountries.getCurrencyCountry(option).subscribe(function (currencyValues) {
                _this.currencyValues = currencyValues;
                console.log(_this.currencyValues);
            });
        }
        else {
            this.CurrencyCountries.getCurrencyCountry(option).subscribe(function (currencyValues) {
                _this.currencyValues = currencyValues;
                console.log(_this.currencyValues);
                _this.targetVal = currencyValues.rates[targetCountry.substr(0, 3)] * _this.fromVal;
                console.log("target values" + _this.targetVal);
            });
        }
    };
    /**
     * @method changeCountryTo
     * @description [Overview] Functionality of change currency country to
     * @param {param} taroptions - value of selected option (to country name)
     * @return void
     */
    CurrencyComponent.prototype.changeCountryTo = function (taroptions) {
        if (this.fromCountry == this.targetCountry) {
            this.targetVal = this.fromVal;
            console.log("From and Target country is same");
        }
        else {
            var rates = this.currencyValues["rates"];
            console.log(rates);
            this.targetVal = rates[taroptions.substr(0, 3)] * this.fromVal;
            console.log(this.targetVal);
        }
    };
    /**
     * @method fromCurrency
     * @description [Overview] Functionality of change currency vale in from input field
     * @param {param} event of value change in fromVal input field
     * @return void
     */
    CurrencyComponent.prototype.fromCurrency = function (event) {
        this.fromVal = event.target.value;
        console.log("From Values" + this.fromVal);
        if (this.fromVal <= 0) {
            this.fromVal = 1;
        }
        var targetCountry = this.targetCountry;
        console.log("Target Country" + targetCountry);
        if (this.fromCountry == this.targetCountry) {
            this.targetVal = this.fromVal;
            console.log("From and Target country is same");
        }
        else {
            var rates = this.currencyValues["rates"];
            this.targetVal = rates[targetCountry.substr(0, 3)] * this.fromVal;
            console.log("Target Country" + this.targetVal);
        }
    };
    return CurrencyComponent;
}());
CurrencyComponent = __decorate([
    core_1.Component({
        selector: 'currency',
        styleUrls: ['currency.component.css'],
        templateUrl: 'currency.component.html',
        providers: [task_services_1.TaskServices]
    }),
    __metadata("design:paramtypes", [task_services_1.TaskServices])
], CurrencyComponent);
exports.CurrencyComponent = CurrencyComponent;
//# sourceMappingURL=currency.component.js.map