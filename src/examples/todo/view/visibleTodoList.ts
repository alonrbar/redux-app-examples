import { computedFrom, customElement } from 'aurelia-framework';
import { connect } from 'redux-app';
import { Todo, TodoList, VisibilityFilter, VisibilityFilterValue } from '../view-model';

@customElement('visible-todo-list')
export class VisibleTodoListView {

    @connect
    public todoList: TodoList;

    @connect
    public visibilityFilter: VisibilityFilterValue;

    @computedFrom('todoList.todos', 'visibilityFilter.value')
    public get visibleTodos(): Todo[] {
        switch (this.visibilityFilter.value) {
            case VisibilityFilter.ShowAll:
                return this.todoList.todos;
            case VisibilityFilter.ShowCompleted:
                return this.todoList.todos.filter(t => t.completed);
            case VisibilityFilter.ShowActive:
                return this.todoList.todos.filter(t => !t.completed);
            default:
                throw new Error('Unknown filter: ' + this.visibilityFilter.value);
        }
    }
}