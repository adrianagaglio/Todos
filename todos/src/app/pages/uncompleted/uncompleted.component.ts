import { Component } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { iTodo } from '../../models/itodo';

@Component({
  selector: 'app-uncompleted',
  templateUrl: './uncompleted.component.html',
  styleUrl: './uncompleted.component.scss',
})
export class UncompletedComponent {
  constructor(private todoSvc: TodoService) {}

  todos: iTodo[] = [];

  ngOnInit() {
    this.todos = this.todoSvc.getUncompleted();
  }
}
