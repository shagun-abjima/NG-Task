import { Component, Input, OnInit } from '@angular/core';
import { Employee } from './employee.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  id: number;
  name: string = '';
  department: string = '';
  editMode: boolean = false;
  editEmployeeId: number;

  employees: Employee[] = [
    new Employee(1, 'Ashwin', 'Sales'),
    new Employee(2, 'Khushboo', 'IT'),
    new Employee(3, 'Prince', 'Production')
  ];

  // add employee function
  addEmployee() {
    this.employees.push({
      id: this.employees.length + 1,
      name: this.name,
      department: this.department
    });
  }

  //delete employee function
  deleteRow(id) {
    for (let i = 0; i < this.employees.length; ++i) {
      if (this.employees[i].id === id) {
        this.employees.splice(i, 1);
      }
    }
  }

  //edit employee function
  EditMode(id: number): void {
    this.editMode = !this.editMode;
    this.editEmployeeId = id;
  }

  @Input()
  searchText: string = '';


  constructor() { }

  ngOnInit(): void { }
}