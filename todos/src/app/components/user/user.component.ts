import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { iUser } from '../../models/iuser';
import { TodoService } from '../../services/todo.service';
import { iTodo } from '../../models/itodo';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent implements OnInit {
  @Input() id!: number;
  user!: iUser;
  taskLeft!: number;

  constructor(private userSvc: UserService, private todoSvc: TodoService) {}

  ngOnInit() {
    let found = this.userSvc.getUserById(this.id);
    if (found) this.user = found;
    this.taskLeft = this.user.todos.filter((todo) => !todo.completed).length;
  }

  delete(id: number) {
    this.todoSvc.deleteTodo(id).subscribe();
    this.user.todos = this.user.todos.filter((todo) => todo.id !== id);
  }

  ngDoCheck() {
    this.taskLeft = this.user.todos.filter((todo) => !todo.completed).length;
  }
}
