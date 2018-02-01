import { component } from "redux-app";

/**
 * Encapsulates storage and modification of a single value.
 */
@component
export class Value<T> {
    public value: T;

    constructor(initial?: T) {
        this.value = initial;
    }

    public setValue(newValue: T): void {
        this.value = newValue;
    }

    public updateValue(newValue: Partial<T>): void {
        this.value = Object.assign({}, this.value, newValue);
    }
}