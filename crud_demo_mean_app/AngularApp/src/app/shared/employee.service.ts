import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {Employee} from './employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  selectedEmployee: Employee;
  employees: Employee[];
  readonly baseUrl = 'http://localhost:3000/api'

  constructor(private http: HttpClient) { }

  postEmployee(emp: Employee)
  {
    return this.http.post(this.baseUrl + '/insert', emp);
  }

  updateEmployee(emp: Employee)
  {
    return this.http.put(this.baseUrl + "/employee" + `/${emp._id}`, emp);
  }
  
  deleteEmployee(_id: String)
  {
    return this.http.delete(this.baseUrl + "/remove" + `/${_id}`);
  }

  getEmployeeList(){
    return this.http.get(this.baseUrl + "/employees");
  }
}
