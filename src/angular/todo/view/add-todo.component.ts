import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'add-todo',
    templateUrl: './add-todo.component.html'
})
export class AddTotoComponent {    

    public text: string;

    // following the practice recommended in: https://stackoverflow.com/questions/35328652/angular2-pass-callback-function-to-child-component-as-input
    @Output() public onAddTodo = new EventEmitter<string>();

    public addTodoClick(): void {
        this.onAddTodo.emit(this.text);
    }
}