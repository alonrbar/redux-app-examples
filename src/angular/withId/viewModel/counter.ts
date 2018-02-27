import { action } from 'redux-app';

export class Counter {

    public value = 0;

    @action
    public increment(): void {
        this.value = this.value + 1;
    }
}