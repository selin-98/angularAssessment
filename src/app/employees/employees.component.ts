import { Component, Pipe, PipeTransform, enableProdMode } from '@angular/core';

import DataSource from 'devextreme/data/data_source';
import { Service } from '../app.service';
import { AppModule } from '../app.module';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Employee, EmployeesService } from './employees.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
  providers: [Service]
})
export class EmployeesComponent {
  dataSource: any;
 
  constructor(service: EmployeesService) {
      this.dataSource = service.getEmployees();
  }
  }

//Employees

