import { component } from 'redux-app';
import { TodoListState } from './todoList';
import { VisibilityFilter, VisibilityFilterValue } from './visibilityFilter';
import { VisibleTodoListState } from './visibleTodoList';

@component
export class AppState {

    public title = "todo";
    public subtitle = "your familiar todo list example, this time with redux-app";

    public todoList = new TodoListState();
    public visibilityFilter = new VisibilityFilterValue(VisibilityFilter.ShowAll);

    public partials = {
        visibleTodos: new VisibleTodoListState()
    };
}