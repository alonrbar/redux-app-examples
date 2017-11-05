import { customElement } from 'aurelia-framework';
import { connect } from 'redux-app';
import { VisibleTodoList } from '../view-model';

@customElement('visible-todo-list')
export class VisibleTodoListElement {

    @connect
    public vm: VisibleTodoList;
}