import { action } from "redux-app";

/**
 * Encapsulates storage and modification of a single value.
 */
export class Value<T> {
    public value: T;

    constructor(initial?: T) {
        this.value = initial;
    }

    @action
    public setValue(newValue: T): void {
        this.value = newValue;
    }

    @action
    public updateValue(newValue: Partial<T>): void {
        this.value = Object.assign({}, this.value, newValue);
    }
}