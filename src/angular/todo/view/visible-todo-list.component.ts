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
        // temp workaround for time travel debugging 
        // from: https://stackoverflow.com/questions/37437347/ngfor-not-updating-when-item-removed
        setInterval(() => {
            this.ref.detectChanges();
        }, 100);
    }
}