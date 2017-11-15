import { customElement } from 'aurelia-framework';
import { connect } from 'redux-app';
import { VisibleTodoList } from '../../viewModel';

@customElement('visible-todo-list')
export class VisibleTodoListElement {

    @connect
    public vm: VisibleTodoList;
}