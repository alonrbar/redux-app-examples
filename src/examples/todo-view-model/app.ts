import { component, withId, computed } from 'redux-app';
import { TodoList } from './todoList';
import { Todo } from './todo';
import { VisibilityFilter } from './visibilityFilter';

@component
export class App {

    public title = "todo";
    public subtitle = "your familiar todo list example, this time with redux-app";

    public todoList = new TodoList();
    public visibilityFilter = VisibilityFilter.ShowAll;

    @computed
    public get visibleTodoList(): Todo[] {
        switch (this.visibilityFilter) {
            case VisibilityFilter.ShowAll:
                return this.todoList.todos;
            case  VisibilityFilter.ShowAll:
                return this.todoList.todos.filter(t => t.completed);
            case  VisibilityFilter.ShowAll:
                return this.todoList.todos.filter(t => !t.completed);
            default:
                throw new Error('Unknown filter: ' + this.visibilityFilter);
        }
    }
}