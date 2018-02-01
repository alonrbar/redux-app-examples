import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'add-todo',
    templateUrl: './add-todo.component.html'
})
export class AddTotoComponent {    

    public text: string;

    @Output() public onAddTodo = new EventEmitter<string>();

    public addTodoClick(): void {
        this.onAddTodo.emit(this.text);
    }
}