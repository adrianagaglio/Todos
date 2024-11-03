import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { TodoService } from '../../services/todo.service';
import { iTodo } from '../../models/itodo';
import { iUser } from '../../models/iuser';
import { filter, map, tap } from 'rxjs';

@Component({
  selector: 'app-byuser',
  templateUrl: './byuser.component.html',
  styleUrl: './byuser.component.scss',
})
export class ByuserComponent implements OnInit {
  constructor(private userSvc: UserService, private todoSvc: TodoService) {}

  todos: iTodo[] = [];
  users: iUser[] = [];

  ngOnInit(): void {
    this.todos = this.todoSvc.todosWithAuthor$.getValue();
    this.userSvc
      .getUsersWithTodos(this.todos)
      .subscribe((users) => this.users.push(...users));
    this.userSvc.usersWithTodos$.next(this.users);
  }

  ngDoCheck() {
    if (this.userSvc.query$.value) {
      this.users = this.userSvc.searchUser();
    }
  }
}
