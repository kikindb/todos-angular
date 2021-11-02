import { Component, OnInit } from "@angular/core";
import { Todo } from "src/app/models/todo.model";

@Component({
  selector: 'todos-app',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export default class TodosComponent implements OnInit {

  todosList: Array<Todo> = [];

  constructor() { }

  ngOnInit(): void {
  }

  onTodoCreated(todo: Todo) {
    this.todosList.push(todo);
    console.log(this.todosList);
  }

  onTodoCompleted(todo: Todo) {
    this.todosList.push(todo);
  }
}