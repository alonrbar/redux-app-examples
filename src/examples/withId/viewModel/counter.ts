import { component } from 'redux-app';

@component
export class CounterComponent {

    public value = 0;

    public increment(): void {
        this.value = this.value + 1;
    }
}