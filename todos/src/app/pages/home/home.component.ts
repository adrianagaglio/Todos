import { Component, OnInit } from '@angular/core';
import { iTodo } from '../../models/itodo';
import { TodoService } from '../../services/todo.service';
import { UserService } from '../../services/user.service';
import { iUser } from '../../models/iuser';
import { map } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  todos: iTodo[] = [];
  users: iUser[] = [];

  constructor(private todoSvc: TodoService, private userSvc: UserService) {}

  ngOnInit() {
    this.userSvc.getUsers().subscribe((users) => {
      this.users.push(...users);
    });

    this.todoSvc
      .getTodosWithAuthor(this.users)
      .subscribe((todos) => this.todos.push(...todos));
    this.todoSvc.todosWithAuthor$.next(this.todos);
  }
}
