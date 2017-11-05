import { Component } from '@angular/core';
import { connect } from 'redux-app';
import { VisibleTodoList } from '../view-model';

@Component({
    selector: 'visible-todo-list',
    templateUrl: './visible-todo-list.component.html'
})
export class VisibleTodoListComponent {

    @connect
    public vm: VisibleTodoList;
}