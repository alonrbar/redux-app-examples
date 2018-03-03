import { Component } from '@angular/core';
import { ReduxApp } from 'redux-app';
import { VisibleTodoList } from '../../viewModel';

@Component({
    selector: 'visible-todo-list',
    templateUrl: './visible-todo-list.component.html'
})
export class VisibleTodoListComponent {

    public vm = ReduxApp.getComponent(VisibleTodoList);
}