import { component } from 'redux-app';

export enum VisibilityFilter {
    ShowAll,
    ShowCompleted,
    ShowActive
}

@component
export class VisibilityFilterValue {
    
    public value: VisibilityFilter;

    constructor(value: VisibilityFilter) {
        this.value = value;
    }

    public changeValue(newValue: VisibilityFilter): void {
        this.value = newValue;
    }
}