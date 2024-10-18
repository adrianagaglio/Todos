import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { iTodo } from '../models/itodo';
import { BehaviorSubject, filter, find, map, Observable, pipe } from 'rxjs';
import { iUser } from '../models/iuser';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  apiUrl = 'http://localhost:3000/todos';

  todosWithAuthor$ = new BehaviorSubject<iTodo[]>([]);

  constructor(private http: HttpClient) {}

  getTodos(): Observable<iTodo[]> {
    return this.http.get<iTodo[]>(this.apiUrl);
  }

  getTodosWithAuthor(userArr: iUser[]): Observable<iTodo[]> {
    return this.getTodos().pipe(
      map((todos: iTodo[]) => {
        return todos.map((todo: iTodo) => {
          let authorFound = userArr.find((user) => user.id === todo.userId);

          if (!authorFound) return todo;

          return {
            ...todo,
            author: authorFound.firstName + ' ' + authorFound.lastName,
          };
        });
      })
    );
  }

  getTodoById(id: number) {
    let todos = this.todosWithAuthor$.getValue();
    return todos.find((todo) => todo.id === id);
  }

  getCompleted() {
    let todos = this.todosWithAuthor$.getValue();
    return todos.filter((todo) => todo.completed);
  }

  getUncompleted() {
    let todos = this.todosWithAuthor$.getValue();
    return todos.filter((todo) => !todo.completed);
  }

  updateTodo(todo: iTodo): Observable<iTodo> {
    return this.http.put<iTodo>(`${this.apiUrl}/${todo.id}`, todo);
  }
}
