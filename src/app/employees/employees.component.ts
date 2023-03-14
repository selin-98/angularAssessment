import { Component, OnInit } from '@angular/core';

import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  dataSource: any = {};

  constructor(private service: EmployeeService) {
    
  }
  ngOnInit(): void {
    this.dataSource = this.service.getDataSource();
  }
}

//Employees

