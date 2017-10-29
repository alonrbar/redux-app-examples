import { Todo } from './todo';

export class FakeTodoList {

    public todos: Todo[] = [];

    public addTodo(text: string): void {
        this.todos = this.todos.concat([new Todo(text)]);
    }
}