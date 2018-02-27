import { action } from 'redux-app';
import { TodoState } from './todo';

export class TodoListState {

    public todos: TodoState[] = [];

    @action
    public addTodo(text: string): void {
        this.todos = this.todos.concat([new TodoState(text)]);
    }

    @action
    public toggleTodo(id: number): void {
        this.todos = this.todos.map(todo => {
            if (todo.id === id) {
                return { 
                    ...todo, 
                    completed: !todo.completed 
                };
            } else {
                return todo;
            }
        });
    }
}