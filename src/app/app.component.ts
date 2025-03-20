import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodoService } from './services/todo.service';
import { UserService } from './services/user.service';
import { iTodo } from './models/itodo';
import { iUser } from './models/iuser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(private todoSvc: TodoService, private userSvc: UserService) {}

  todos: iTodo[] = [];
  users: iUser[] = [];

  ngOnInit() {
    this.userSvc.getUsers().subscribe((users) => {
      this.users = users;
      this.userSvc.usersWithTodos$.next(this.users);
    });

    this.todoSvc.getTodosWithAuthor(this.users).subscribe((todos) => {
      this.todos = todos;
      this.todoSvc.todosWithAuthor$.next(this.todos);
    });
  }
}
