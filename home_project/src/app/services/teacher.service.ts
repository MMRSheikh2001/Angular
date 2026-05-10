import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { TeacherModel } from '../model/teacher.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TeacherService {


  private teacherApi = environment.apiUrl + "teacher";
  constructor(private http: HttpClient) { }

  getAllTeacher(): Observable<TeacherModel[]> {

    return this.http.get<TeacherModel[]>(this.teacherApi);
  }


  saveTeacher(teacher: TeacherModel) {
    return this.http.post<TeacherModel>(this.teacherApi, teacher);
  }

  //put Request

  getById(id: string): Observable<TeacherModel> {
    return this.http.get<TeacherModel>(this.teacherApi + '/' + id);
  }

  updateTeacher(teacher: TeacherModel): Observable<TeacherModel> {
    return this.http.put<TeacherModel>(this.teacherApi + '/' + teacher.id, teacher);
  }


  //delete Request
  deleteDepartment(id: string): Observable<void> {
    return this.http.delete<void>(this.teacherApi + '/' + id);
  }
}
