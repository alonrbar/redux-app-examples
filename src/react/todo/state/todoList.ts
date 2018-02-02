import { component } from 'redux-app';
import { TodoState } from './todo';

@component
export class TodoList {

    public todos: TodoState[] = [];

    public addTodo(text: string): void {
        this.todos = this.todos.concat([new TodoState(text)]);
    }

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