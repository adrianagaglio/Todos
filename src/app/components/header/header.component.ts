import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodoService } from '../../services/todo.service';
import { UserService } from '../../services/user.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor(private todoSvc: TodoService, private userSvc: UserService) {}
  @ViewChild('form') form!: NgForm;

  query: string = '';

  ngDoCheck() {
    this.todoSvc.query$.next(this.query);
    this.userSvc.query$.next(this.query);
  }

  clean() {
    this.form.reset();
  }
}
