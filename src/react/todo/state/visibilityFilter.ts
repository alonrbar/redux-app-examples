import { action } from 'redux-app';

export enum VisibilityFilter {
    ShowAll = 'SHOW_ALL',    
    ShowActive = 'SHOW_ACTIVE',
    ShowCompleted = 'SHOW_COMPLETED'
}

export class VisibilityFilterValue {
    
    public value: VisibilityFilter;

    constructor(value: VisibilityFilter) {
        this.value = value;
    }

    @action
    public setValue(newValue: VisibilityFilter): void {
        this.value = newValue;
    }
}