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

    constructor() {
        //
        // 1. The following line of code is a time travel debugging workaround - it is NOT required on production.
        // 2. Will supply a more elegant solution shortly.
        //
        // sources:
        // https://stackoverflow.com/questions/37437347/ngfor-not-updating-when-item-removed
        // https://stackoverflow.com/questions/41364386/whats-the-difference-between-markforcheck-and-detectchanges
        // https://stackoverflow.com/questions/46284490/angular-change-detection-for-updates-within-a-callback
        //
        setInterval(() => { /* noop */ }, 400);
    }
}