import { Component, Input, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo.model';

@Component({
  selector: 'app-todoitem',
  templateUrl: './todoitem.component.html',
  styleUrls: ['./todoitem.component.css']
})
export class TodoitemComponent implements OnInit {

  @Input() todo: Todo = new Todo('4', '', false);

  constructor() { }

  ngOnInit(): void {
  }

}
