import { TodoList } from './todoList';
import { VisibilityFilter, VisibilityFilterValue } from './visibilityFilter';
import { VisibleTodoList } from './visibleTodoList';

export class App {

    public title = "todo";
    public subtitle = "your familiar todo list example, this time with redux-app";

    public todoList = new TodoList();
    public visibilityFilter = new VisibilityFilterValue(VisibilityFilter.ShowAll);

    public visibleTodos: VisibleTodoList;

    constructor() {
        // using poor man's dependency injection here.
        // about DI: https://en.wikipedia.org/wiki/Dependency_injection
        // js DI containers: https://www.npmjs.com/search?q=dependency+injection
        this.visibleTodos = new VisibleTodoList(this.todoList, this.visibilityFilter);
    }
}