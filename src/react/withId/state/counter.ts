import { component } from 'redux-app';

@component
export class CounterState {

    public value = 0;

    public increment(): void {
        this.value = this.value + 1;
    }
}