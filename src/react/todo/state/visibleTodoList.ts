import { component, connect, computed, noDispatch } from 'redux-app';
import { TodoList } from './todoList';
import { VisibilityFilterValue, VisibilityFilter } from './visibilityFilter';
import { TodoState } from './todo';

@component
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

    @connect
    private todoList: TodoList = null;

    @connect
    private filter: VisibilityFilterValue = null;

    @noDispatch
    public toggleTodo(id: number): void {
        this.todoList.toggleTodo(id);
    }
}