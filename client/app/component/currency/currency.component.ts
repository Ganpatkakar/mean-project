import {Component, Class} from '@angular/core';

import  {TaskServices} from '../../services/task.services';

@Component({
  selector: 'currency',
  styleUrls: ['currency.component.css'],
  templateUrl: 'currency.component.html',
  providers: [TaskServices]
})

export class CurrencyComponent {
  currencyc = [];
  currencyValues = [];

  fromCountry: string;
  targetCountry: string;

  fromVal: number;
  targetVal: number;

  /**
   * @method Constructor
   * @description [Overview]
   * @param {param} options - value of selected option (from country name)
   * @return void
   */
  constructor(private CurrencyCountries : TaskServices) {

    this.targetCountry = 'JPY-Japanese yen';
    var targetCountry = this.targetCountry;
    this.fromCountry = "AUD-Australian dollar";
    this.fromVal = 1;
    this.currencyc = this.CurrencyCountries.currencyList;

    this.CurrencyCountries.getCurrencyCountry(this.currencyc[0].cc).subscribe(currencyValues => {
      this.currencyValues = currencyValues;
      console.log(this.currencyValues);
      this.targetVal = currencyValues.rates[targetCountry.substr(0, 3)] * this.fromVal;
      console.log("target values" + this.targetVal);
    });

  }

  /**
   * @method changeCountryFrom
   * @description [Overview] Functionality of change currency country from
   * @param {param} options - value of selected option (from country name)
   * @return void
   */
  changeCountryFrom(options) {
    console.log("change country option full value" + options);
    var option = options.substr(0, 3);
    console.log("change country option value after substr" + option);
    var targetCountry = this.targetCountry;
    if (this.fromCountry == this.targetCountry) {
      this.targetVal = this.fromVal;
      console.log("From and Target country is same");
      this.CurrencyCountries.getCurrencyCountry(option).subscribe(currencyValues => {
        this.currencyValues = currencyValues;
        console.log(this.currencyValues);
      });
    } else {

      this.CurrencyCountries.getCurrencyCountry(option).subscribe(currencyValues => {
        this.currencyValues = currencyValues;
        console.log(this.currencyValues);
        this.targetVal = currencyValues.rates[targetCountry.substr(0, 3)] * this.fromVal;
        console.log("target values" + this.targetVal);
      });
    }
  }

  /**
   * @method changeCountryTo
   * @description [Overview] Functionality of change currency country to
   * @param {param} taroptions - value of selected option (to country name)
   * @return void
   */
  changeCountryTo(taroptions) {
    if (this.fromCountry == this.targetCountry) {
      this.targetVal = this.fromVal;
      console.log("From and Target country is same");
    } else {
      var rates = this.currencyValues["rates"];
      console.log(rates);
      this.targetVal = rates[taroptions.substr(0, 3)] * this.fromVal;
      console.log(this.targetVal);
    }
  }

  /**
   * @method fromCurrency
   * @description [Overview] Functionality of change currency vale in from input field
   * @param {param} event of value change in fromVal input field
   * @return void
   */
  fromCurrency(event: any) {
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
    } else {
      var rates = this.currencyValues["rates"]
      this.targetVal = rates[targetCountry.substr(0, 3)] * this.fromVal;
      console.log("Target Country" + this.targetVal);
    }
  }

}
