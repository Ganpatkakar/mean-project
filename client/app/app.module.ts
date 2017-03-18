import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import  { HomeComponent } from './component/home/home.component'
import  { HttpModule } from '@angular/http';
import  { FormsModule } from  '@angular/forms';

@NgModule({
    imports:      [ BrowserModule,  HttpModule, FormsModule],
    declarations: [ AppComponent, HomeComponent ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }