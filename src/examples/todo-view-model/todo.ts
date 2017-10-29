export class Todo {

    private static nextTodoId = 0;

    public readonly id = Todo.nextTodoId++;
    public text: string;
    public completed = false;

    constructor(text: string) {
        this.text = text;
    }
}