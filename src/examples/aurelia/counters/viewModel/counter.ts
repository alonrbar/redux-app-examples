import { component } from 'redux-app';

@component
export class CounterComponent {

    private static countersId = 1;

    public id = CounterComponent.countersId++;
    public value = 0;

    public increment(counterId: number): void {

        if (counterId !== this.id)
            return;

        this.value = this.value + 1;
    }
}