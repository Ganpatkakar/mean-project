import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import  { HomeComponent } from './component/home/home.component'
import  { HttpModule } from '@angular/http';
import  { FormsModule } from  '@angular/forms';

import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { CurrencyComponent } from './component/currency/currency.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { NextMonthComponent } from './component/dashboard/next-month.compnent';
import { NextQuarterComponent } from './component/dashboard/next-quarter.component';
import { NextWeekComponent } from './component/dashboard/next-week.component';
import { NextYearComponent } from './component/dashboard/next-year.component';

@NgModule({
    imports:      [ BrowserModule,  HttpModule, FormsModule],
    declarations: [ AppComponent, HomeComponent, CurrencyComponent, DashboardComponent, NextMonthComponent,
        NextQuarterComponent, NextWeekComponent, NextYearComponent],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }