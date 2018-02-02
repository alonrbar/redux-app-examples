export class TodoState {

    private static nextTodoId = 0;

    public readonly id = TodoState.nextTodoId++;
    public text: string;
    public completed = false;

    constructor(text: string) {
        this.text = text;
    }
}