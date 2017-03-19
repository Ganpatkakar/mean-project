import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { CurrencyComponent } from './component/currency/currency.component';

import { DashboardComponent } from './component/dashboard/dashboard.component';
import { NextMonthComponent } from './component/dashboard/next-month.compnent';
import { NextQuarterComponent } from './component/dashboard/next-quarter.component';
import { NextWeekComponent } from './component/dashboard/next-week.component';
import { NextYearComponent } from './component/dashboard/next-year.component';

export const rootRouterConfig: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'currency', component: CurrencyComponent },
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },

    { path: 'dashboard/next-week', component: NextWeekComponent },
    { path: 'dashboard/next-month', component: NextMonthComponent },
    { path: 'dashboard/next-quarter', component: NextQuarterComponent },
    { path: 'dashboard/next-year', component: NextYearComponent },
];

