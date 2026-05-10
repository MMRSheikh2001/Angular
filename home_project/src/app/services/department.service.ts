import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DepartmentModel } from '../model/department.model';

@Injectable({
  providedIn: 'root',
})
export class DepartmentService {

  private departmentApi = environment.apiUrl + "department";
  constructor(private http: HttpClient) { }

  getAllDep(): Observable<DepartmentModel[]> {

    return this.http.get<DepartmentModel[]>(this.departmentApi);
  }


  saveDepartment(student: DepartmentModel) {
    return this.http.post<DepartmentModel>(this.departmentApi, student);
  }

  //put Request

  getById(id: string): Observable<DepartmentModel> {
    return this.http.get<DepartmentModel>(this.departmentApi + '/' + id);
  }

  updateDepartment(student: DepartmentModel): Observable<DepartmentModel> {
    return this.http.put<DepartmentModel>(this.departmentApi + '/' + student.id, student);
  }


  //delete Request
  deleteDepartment(id: string): Observable<void> {
    return this.http.delete<void>(this.departmentApi + '/' + id);
  }
}
