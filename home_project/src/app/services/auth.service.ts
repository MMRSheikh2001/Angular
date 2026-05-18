import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { UserModel } from '../model/user.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private authUrl: string = environment.apiUrl + 'users';
  constructor
    (
      private http: HttpClient) { }

  getAll(): Observable<UserModel[]> {
    return this.http.get<UserModel[]>(this.authUrl);
  }

  save(user: UserModel) {
    return this.http.post<UserModel>(this.authUrl, user);
  }
  delete(id: string) {
    return this.http.delete<UserModel>(this.authUrl + '' + id);
  }

  getById(id: string): Observable<UserModel> {
    return this.http.get<UserModel>(this.authUrl + '/' + id);
  }
  update(user: UserModel,): Observable<UserModel> {
    return this.http.put<UserModel>(this.authUrl + '/' + user.id, user)
  }

  getUserByEmail(email: string): Observable<UserModel[]> {
    return this.http.get<UserModel[]>(`${this.authUrl}?email=${email}`);
  }
  



}
