import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { iUser } from '../models/iuser';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  apiUrl = 'http://localhost:3000/users';

  getUsers(): Observable<iUser[]> {
    return this.http.get<iUser[]>(this.apiUrl);
  }
}
