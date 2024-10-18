import { Component, Input, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { iTodo } from '../../models/itodo';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss',
})
export class TaskComponent implements OnInit {
  @Input() id!: number;

  todo!: iTodo;

  constructor(private todoSvc: TodoService) {}

  ngOnInit() {
    let found = this.todoSvc.getTodoById(this.id);
    if (found) this.todo = found;
  }

  update(todo: iTodo) {
    this.todoSvc.updateTodo(todo).subscribe();
  }
}
