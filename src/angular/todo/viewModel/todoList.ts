import { action } from 'redux-app';
import { Todo } from './todo';

export class TodoList {

    public todos: Todo[] = [];

    @action
    public addTodo(text: string): void {
        this.todos = this.todos.concat([new Todo(text)]);
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