import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import TodosComponent from './components/todos/todos.component';
import { HeaderComponent } from './components/todos/header/header.component';
import { TodoslistComponent } from './components/todos/todoslist/todoslist.component';
import { TodoitemComponent } from './components/todos/todoslist/todoitem/todoitem.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    HeaderComponent,
    TodoslistComponent,
    TodoitemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
