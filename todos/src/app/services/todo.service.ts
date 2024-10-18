import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { iTodo } from '../models/itodo';
import {
  BehaviorSubject,
  filter,
  find,
  map,
  Observable,
  pipe,
  ReplaySubject,
  Subject,
} from 'rxjs';
import { iUser } from '../models/iuser';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  apiUrl = 'http://localhost:3000/todos';

  todosWithAuthor$ = new BehaviorSubject<iTodo[]>([]);
  query$ = new BehaviorSubject<string>('');
  authorToDos$ = new ReplaySubject<iTodo[]>();

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

  searchTodo(): iTodo[] {
    let todos = this.todosWithAuthor$.getValue();

    let query = this.query$.value;
    return todos.filter(
      (todo) =>
        todo.todo.toLowerCase().includes(query.toLowerCase()) ||
        todo.author.toLowerCase().includes(query.toLowerCase())
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

  deleteTodo(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  addTask(task: Partial<iTodo>): Observable<iTodo> {
    return this.http.post<iTodo>(this.apiUrl, task);
  }
}
