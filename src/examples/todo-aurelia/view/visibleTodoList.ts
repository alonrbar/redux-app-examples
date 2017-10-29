import { customElement, bindable, computedFrom, ObserverLocator, observable } from 'aurelia-framework';
import { Todo, TodoList, VisibilityFilterValue, VisibilityFilter } from '../../todo-view-model';
import { connect } from 'redux-app';

@customElement('visible-todo-list')
export class VisibleTodoListView {

    @connect
    public todoList: TodoList;

    public fakeList = {
        todos: [{ text: 'some' }]
    };

    @connect
    public visibilityFilter: VisibilityFilterValue;

    @computedFrom('todoList.todos.length', 'visibilityFilter.value')
    public get visibleTodos(): Todo[] {
        switch (this.visibilityFilter.value) {
            case VisibilityFilter.ShowAll:
                return this.todoList.todos;
            case VisibilityFilter.ShowAll:
                return this.todoList.todos.filter(t => t.completed);
            case VisibilityFilter.ShowAll:
                return this.todoList.todos.filter(t => !t.completed);
            default:
                throw new Error('Unknown filter: ' + this.visibilityFilter.value);
        }
    }

    public doSomething() {
        this.fakeList.todos.push({ text: 'new' });
    }
}