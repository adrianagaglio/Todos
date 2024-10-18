import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodoService } from '../../services/todo.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor(private todoSvc: TodoService, private userSvc: UserService) {}

  query: string = '';

  ngDoCheck() {
    this.todoSvc.query$.next(this.query);
    this.userSvc.query$.next(this.query);
  }
}
