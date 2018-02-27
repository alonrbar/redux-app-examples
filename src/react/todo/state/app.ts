import { TodoListState } from './todoList';
import { VisibilityFilter, VisibilityFilterValue } from './visibilityFilter';
import { VisibleTodoListState } from './visibleTodoList';

export class AppState {

    public title = "todo";
    public subtitle = "your familiar todo list example, this time with redux-app";

    public todoList = new TodoListState();
    public visibilityFilter = new VisibilityFilterValue(VisibilityFilter.ShowAll);

    public visibleTodos: VisibleTodoListState;

    constructor() {
        // using poor man's dependency injection here.
        // about DI: https://en.wikipedia.org/wiki/Dependency_injection
        // js DI containers: https://www.npmjs.com/search?q=dependency+injection
        this.visibleTodos = new VisibleTodoListState(this.todoList, this.visibilityFilter);
    }
}