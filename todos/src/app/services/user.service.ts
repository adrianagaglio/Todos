import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { iUser } from '../models/iuser';
import { BehaviorSubject, filter, map, Observable } from 'rxjs';
import { iTodo } from '../models/itodo';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  apiUrl = 'http://localhost:3000/users';

  usersWithTodos$ = new BehaviorSubject<iUser[]>([]);
  query$ = new BehaviorSubject<string>('');

  getUsers(): Observable<iUser[]> {
    return this.http.get<iUser[]>(this.apiUrl);
  }

  getUsersWithTodos(todosArr: iTodo[]): Observable<iUser[]> {
    return this.getUsers()
      .pipe(
        map((users: iUser[]) => {
          return users.map((user: iUser) => {
            let tasksFound = todosArr.filter((todo) => todo.userId === user.id);
            return {
              ...user,
              todos: tasksFound,
            };
          });
        })
      )
      .pipe(map((users) => users.filter((user) => user.todos.length > 0)));
  }

  getUserById(id: number) {
    let users = this.usersWithTodos$.getValue();
    return users.find((user) => user.id === id);
  }

  searchUser(): iUser[] {
    let users = this.usersWithTodos$.getValue();
    let query = this.query$.value;
    return users.filter(
      (user) =>
        user.firstName.toLowerCase().includes(query.toLowerCase()) ||
        user.lastName.toLowerCase().includes(query.toLowerCase()) ||
        user.todos.find((todo) =>
          todo.todo.toLowerCase().includes(query.toLowerCase())
        )
    );
  }
}
