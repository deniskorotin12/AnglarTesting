import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ModalWindowComponent } from './modal-window/modal-window.component';



class Todo {
  constructor(public title: string,
              public  completed: boolean = false){ }
}
const todos: Todo[] = [
  {
    title: 'Не болеть',
    completed: false
  },
  {
    title: 'Отдохнуть',
    completed: false
  },
  {
    title: 'Выучить Angular2' ,
    completed: false
  }
];

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'Angular Material ToDo';
  todos: Todo[]  = todos;
  newTodoTitle: string = '';

  toggle(todo: Todo) {
    todo.completed = !todo.completed;
  }
  create() {

    const todo: Todo = new Todo(this.newTodoTitle);

    this.todos.push(todo);
    this.newTodoTitle;
  }


  constructor(public dialog: MatDialog) { }

  public openModal() {
    this.dialog.open( ModalWindowComponent, {data: {name: 'Вы точно хотите удалить?'}});
  }

  public delete(todo: any) {
    const index = this.todos.indexOf(todo);

    if ( index > -1) {
      this.todos.splice(index, 1);
    }
  }
}
