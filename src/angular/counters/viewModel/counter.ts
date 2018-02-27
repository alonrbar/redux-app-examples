import { action } from 'redux-app';

export class Counter {

    private static countersId = 1;

    public id = Counter.countersId++;
    public value = 0;

    @action
    public increment(counterId: number): void {

        if (counterId !== this.id)
            return;

        this.value = this.value + 1;
    }
}