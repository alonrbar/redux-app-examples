import { component } from 'redux-app';

export enum VisibilityFilter {
    ShowAll = 'SHOW_ALL',    
    ShowActive = 'SHOW_ACTIVE',
    ShowCompleted = 'SHOW_COMPLETED'
}

@component
export class VisibilityFilterValue {
    
    public value: VisibilityFilter;

    constructor(value: VisibilityFilter) {
        this.value = value;
    }

    public setValue(newValue: VisibilityFilter): void {
        this.value = newValue;
    }
}