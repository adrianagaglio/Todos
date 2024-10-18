import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { iTodo } from '../../models/itodo';

@Component({
  selector: 'app-accomplished',
  templateUrl: './accomplished.component.html',
  styleUrl: './accomplished.component.scss',
})
export class AccomplishedComponent implements OnInit {
  constructor(private todoSvc: TodoService) {}

  todos: iTodo[] = [];

  ngOnInit() {
    this.todos = this.todoSvc.getCompleted();
  }
}
