import { component } from 'redux-app';
import { Counter } from '../model/counter';

@component
export class CounterComponent {

    public counter = new Counter();

    public increment(): void {

        const { value, ...rest } = this.counter;

        this.counter = {
            value: value + 1,
            ...rest
        };
    }
}