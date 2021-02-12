import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Todo } from '../../models';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
})
export class TodoListComponent {
  @Input() todos: Todo[];
  @Output() toggle = new EventEmitter<number>();
  @Output() update = new EventEmitter<{ id: number; text: string }>();
  @Output() delete = new EventEmitter<number>();

  todosTrackByFn(index, item: Todo): number {
    return item.id;
  }
}
