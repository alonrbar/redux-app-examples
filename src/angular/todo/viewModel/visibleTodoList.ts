import { sequence } from 'redux-app';
import { TodoList } from './todoList';
import { VisibilityFilterValue, VisibilityFilter } from './visibilityFilter';
import { Todo } from './todo';

export class VisibleTodoList {

    public get visibleTodos(): Todo[] {
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
        private readonly todoList: TodoList,
        private readonly filter: VisibilityFilterValue
    ) {
    }

    @sequence
    public toggleTodo(id: number): void {
        this.todoList.toggleTodo(id);
    }
}