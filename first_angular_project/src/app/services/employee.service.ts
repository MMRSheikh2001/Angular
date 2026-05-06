import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeModel } from '../models/employee.model';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  baseApi: string = "http://localhost:3000/Employee";
  constructor(private http: HttpClient) { }

  //Post request
  saveEmployee(employee: EmployeeModel) {
    this.http.post<EmployeeModel>(this.baseApi, employee);

  }

  //get Request
  getAllEmployee(): Observable<EmployeeModel[]> {
    return this.http.get<EmployeeModel[]>(this.baseApi);
  }

  //Update Request

  updateEmployee(employee: EmployeeModel): Observable<EmployeeModel> {

    return this.http.put<EmployeeModel>(this.baseApi + '/' + employee.id, employee);
  }
  //Delete Request
  deleteEmployee(id: string): Observable<void> {
    return this.http.delete<void>(this.baseApi + '/' + id);
  }


}
