import { ChangeDetectorRef, Component } from '@angular/core';
import { connect } from 'redux-app';
import { VisibleTodoList } from '../view-model';

@Component({
    selector: 'visible-todo-list',
    templateUrl: './visible-todo-list.component.html'
})
export class VisibleTodoListComponent {

    @connect
    public vm: VisibleTodoList;

    constructor(private ref: ChangeDetectorRef) {
        // Workaround for time travel debugging. Still trying to figure it out...
        setInterval(() => {
            this.ref.detectChanges();
        }, 100);
    }
}