import { component } from 'redux-app';
import { Todo } from './todo';

@component
export class TodoList {

    public todos: Todo[] = [];

    public addTodo(text: string): void {
        this.todos = this.todos.concat([new Todo(text)]);
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