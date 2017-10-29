import { customElement, bindable, computedFrom, ObserverLocator, observable } from 'aurelia-framework';
import { Todo, TodoList, VisibilityFilterValue, VisibilityFilter } from '../../todo-view-model';
import { connect } from 'redux-app';

export class FakeTodoList {

    public todos: Todo[] = [];

    public addTodo(text: string): void {
        this.todos = this.todos.concat([new Todo(text)]);
    }
}

@customElement('visible-todo-list')
export class VisibleTodoListView {

    @connect
    public todoList: TodoList;

    public fake = new FakeTodoList();

    @connect
    public visibilityFilter: VisibilityFilterValue;

    // @computedFrom('todoList.todos.length', 'visibilityFilter.value')
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

    constructor(readonly observer: ObserverLocator) {
        console.log(this.todoList)
    }

    public todoListChanged() {
        console.error('hi')
        this.observer.getObserver(this.todoList, 'todos').subscribe(() => {
            console.warn('changed');
        });
    }

    public log(): void {
        // this.fake.todos.push({ text: '123' });
        this.todoList.addTodo('456');
    }
}