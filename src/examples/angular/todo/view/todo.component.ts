import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../view-model/todo';

@Component({
    selector: 'todo',
    templateUrl: './todo.component.html'
})
export class TodoComponent {

    @Input() public todo: Todo;

    // following the practice recommended in: https://stackoverflow.com/questions/35328652/angular2-pass-callback-function-to-child-component-as-input
    @Output() public onTodoClick = new EventEmitter<number>();

    public todoClick(): void {
        this.onTodoClick.emit(this.todo.id);
    }

}