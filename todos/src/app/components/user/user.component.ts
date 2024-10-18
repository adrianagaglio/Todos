import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { iUser } from '../../models/iuser';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent implements OnInit {
  @Input() id!: number;
  user!: iUser;
  taskLeft!: number;

  constructor(private userSvc: UserService) {}

  ngOnInit() {
    let found = this.userSvc.getUserById(this.id);
    if (found) this.user = found;
    this.taskLeft = this.user.todos.filter((todo) => !todo.completed).length;
  }

  ngDoCheck() {
    this.taskLeft = this.user.todos.filter((todo) => !todo.completed).length;
  }
}
