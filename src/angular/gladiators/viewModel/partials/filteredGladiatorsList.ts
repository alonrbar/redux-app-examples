import { computed, connect } from 'redux-app';
import { Gladiator } from '../../model/gladiator';
import { GladiatorsList } from './gladiatorsList';
import { GladiatorFilter } from './gladiatorFilter';

export class FilteredGladiatorsList {

    // public props

    @computed
    public get list(): Gladiator[] {
        return this.allGladiators.gladiators.filter(g => g.isActive === this.isActive);
    }

    // private props

    @connect
    private allGladiators: GladiatorsList;

    private readonly isActive: boolean;

    // constructor

    constructor(isActive: boolean) {
        this.isActive = isActive;
    }
}