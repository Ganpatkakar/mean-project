"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var home_component_1 = require("./component/home/home.component");
var currency_component_1 = require("./component/currency/currency.component");
var dashboard_component_1 = require("./component/dashboard/dashboard.component");
var next_month_compnent_1 = require("./component/dashboard/next-month.compnent");
var next_quarter_component_1 = require("./component/dashboard/next-quarter.component");
var next_week_component_1 = require("./component/dashboard/next-week.component");
var next_year_component_1 = require("./component/dashboard/next-year.component");
exports.rootRouterConfig = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'currency', component: currency_component_1.CurrencyComponent },
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: dashboard_component_1.DashboardComponent },
    { path: 'dashboard/next-week', component: next_week_component_1.NextWeekComponent },
    { path: 'dashboard/next-month', component: next_month_compnent_1.NextMonthComponent },
    { path: 'dashboard/next-quarter', component: next_quarter_component_1.NextQuarterComponent },
    { path: 'dashboard/next-year', component: next_year_component_1.NextYearComponent },
];
//# sourceMappingURL=app.routes.js.map