import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StudentModel } from '../model/student.model';
import { identifierName } from '@angular/compiler';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private baseApi: string = "http://localhost:3000/student";
  constructor(private http: HttpClient) { }


  //Get Request
  getAllStudents(): Observable<StudentModel[]> {
    return this.http.get<StudentModel[]>(this.baseApi);

  }

  //post Request

  saveStudent(student: StudentModel) {
    this.http.post<StudentModel>(this.baseApi, student);
  }

  //put Request
  updateStudent(student: StudentModel): Observable<StudentModel> {
    return this.http.put<StudentModel>(this.baseApi + '/' + student.id, student);
  }


  //delete Request
  deleteStudent(id: string): Observable<void> {
    return this.http.delete<void>(this.baseApi + '/' + id);
  }

}



