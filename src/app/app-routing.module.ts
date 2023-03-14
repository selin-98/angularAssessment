import { NgModule } from "@angular/core";
import {Routes, RouterModule } from '@angular/router';
import {MainPageComponent} from './main-page/main-page.component';

import { EmployeesComponent } from "./employees/employees.component";
 
const routes: Routes = [
    {path: 'employees', component: EmployeesComponent},
    {path: 'main-page', component: MainPageComponent}
];

@NgModule ({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }