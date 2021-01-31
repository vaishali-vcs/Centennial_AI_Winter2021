import { Component, OnInit } from '@angular/core';
// import {FormsModule} from '@angular/forms';
import { NgForm } from '@angular/forms/forms';
import { EmployeeService } from '../shared/employee.service';
import { Employee } from "../shared/employee.model";

declare var M: any;

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers: [EmployeeService]
})
export class EmployeeComponent implements OnInit {

  constructor(public employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.resetForm();
    this.refreshEmployeeList();
  }

  resetForm(form?: NgForm) {
    if (form)
      form.reset();

    this.employeeService.selectedEmployee = {
      _id: "",
      name: "",
      position: "",
      office: "",
      salary: 0,
    };

  }

  onSubmit(form: NgForm) {

    if (form.value.id == "") {
      this.employeeService.postEmployee(form.value).subscribe((res) => {
        this.resetForm(form);
        M.toast({ html: 'Saved successfully!', classes: 'rounded' });
        this.refreshEmployeeList();
      });
    }
    else {
      this.employeeService.updateEmployee(form.value).subscribe((res) => {
        this.resetForm(form);
        M.toast({ html: 'Updated successfully!', classes: 'rounded' });
        this.refreshEmployeeList();
      });
    }
  }

  refreshEmployeeList() {
    this.employeeService.getEmployeeList().subscribe((res) => {
      this.employeeService.employees = res as Employee[];
    });
  }

  onEdit(emp: Employee) {
    this.employeeService.selectedEmployee = emp;
  }

  onDelete(_id: String, form: NgForm) {

    if (confirm('Are you sure to delete this record?') == true) {
      this.employeeService.deleteEmployee(_id).subscribe((res) => {
        this.resetForm(form);
        M.toast({ html: 'Deleted successfully!', classes: 'rounded' });
        this.refreshEmployeeList();
      });
      this.refreshEmployeeList();
    }
  }
}
