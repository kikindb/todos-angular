import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/models/todo.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  inputTodo: string = "";
  @Output() todoCreated = new EventEmitter<Todo>();
  todosList: Array<any> = [];

  constructor() { }

  ngOnInit(): void {
  }

  addTodo(event: Event): void {
    this.todoCreated.emit(new Todo(this.generateId(), this.inputTodo, false));
    this.clearInput();
  }

  clearInput(): void {
    this.inputTodo = "";
  }

  generateId(): string {
    return "" + Math.floor(Math.random() * 10000);
  }
}
