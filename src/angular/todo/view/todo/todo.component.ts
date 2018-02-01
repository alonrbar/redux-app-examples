import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../../viewModel';

@Component({
    selector: 'todo',
    templateUrl: './todo.component.html'
})
export class TodoComponent {

    @Input() public todo: Todo;

    @Output() public onTodoClick = new EventEmitter<number>();

    public todoClick(): void {
        this.onTodoClick.emit(this.todo.id);
    }

}