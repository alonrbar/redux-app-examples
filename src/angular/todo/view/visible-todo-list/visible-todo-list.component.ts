import { Component } from '@angular/core';
import { VisibleTodoList } from '../../viewModel';

@Component({
    selector: 'visible-todo-list',
    templateUrl: './visible-todo-list.component.html'
})
export class VisibleTodoListComponent {

    // @connect
    public vm: VisibleTodoList;
}