"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
var home_component_1 = require("./component/home/home.component");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
var currency_component_1 = require("./component/currency/currency.component");
var dashboard_component_1 = require("./component/dashboard/dashboard.component");
var next_month_compnent_1 = require("./component/dashboard/next-month.compnent");
var next_quarter_component_1 = require("./component/dashboard/next-quarter.component");
var next_week_component_1 = require("./component/dashboard/next-week.component");
var next_year_component_1 = require("./component/dashboard/next-year.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, http_1.HttpModule, forms_1.FormsModule],
        declarations: [app_component_1.AppComponent, home_component_1.HomeComponent, currency_component_1.CurrencyComponent, dashboard_component_1.DashboardComponent, next_month_compnent_1.NextMonthComponent,
            next_quarter_component_1.NextQuarterComponent, next_week_component_1.NextWeekComponent, next_year_component_1.NextYearComponent],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map