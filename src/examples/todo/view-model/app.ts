import { component } from 'redux-app';
import { Todo } from './todo';
import { TodoList } from './todoList';
import { VisibilityFilter, VisibilityFilterValue } from './visibilityFilter';
import { VisibleTodoList } from './visibleTodoList';

@component
export class App {

    public title = "todo";
    public subtitle = "your familiar todo list example, this time with redux-app";

    public todoList = new TodoList();
    public visibilityFilter = new VisibilityFilterValue(VisibilityFilter.ShowAll);

    public partials = {
        visibleTodos: new VisibleTodoList()
    };
}