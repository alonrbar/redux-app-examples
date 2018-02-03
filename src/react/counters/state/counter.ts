import { component } from 'redux-app';

@component
export class CounterState {

    private static countersId = 1;

    public id = CounterState.countersId++;
    public value = 0;

    public increment(counterId: number): void {

        if (counterId !== this.id)
            return;

        this.value = this.value + 1;
    }
}