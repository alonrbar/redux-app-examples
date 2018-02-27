import { action, computed } from 'redux-app';
import { TodoListState } from './todoList';
import { VisibilityFilterValue, VisibilityFilter } from './visibilityFilter';
import { TodoState } from './todo';

export class VisibleTodoListState {

    @computed
    public get visibleTodos(): TodoState[] {
        switch (this.filter.value) {
            case VisibilityFilter.ShowAll:
                return this.todoList.todos;
            case VisibilityFilter.ShowCompleted:
                return this.todoList.todos.filter(t => t.completed);
            case VisibilityFilter.ShowActive:
                return this.todoList.todos.filter(t => !t.completed);
            default:
                throw new Error('Unknown filter: ' + this.filter.value);
        }
    }

    constructor(
        private readonly todoList: TodoListState,
        private readonly filter: VisibilityFilterValue) {
    }

    @action
    public toggleTodo(id: number): void {
        this.todoList.toggleTodo(id);
    }
}