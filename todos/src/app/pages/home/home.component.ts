import { Component, OnInit } from '@angular/core';
import { iTodo } from '../../models/itodo';
import { TodoService } from '../../services/todo.service';
import { UserService } from '../../services/user.service';
import { iUser } from '../../models/iuser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  todos: iTodo[] = [];

  constructor(private todoSvc: TodoService) {}

  ngOnInit() {
    this.todoSvc.todosWithAuthor$.subscribe((todos) => (this.todos = todos));
  }

  ngDoCheck() {
    if (this.todoSvc.query$.value) {
      this.todos = this.todoSvc.searchTodo();
    }
  }
}
