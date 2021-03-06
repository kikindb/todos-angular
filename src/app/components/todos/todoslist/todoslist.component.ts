import { Component, Input, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo.model';

@Component({
  selector: 'app-todoslist',
  templateUrl: './todoslist.component.html'
})
export class TodoslistComponent implements OnInit {
  @Input() todosList: Array<Todo> = [];

  constructor() { }

  ngOnInit(): void { }
}
