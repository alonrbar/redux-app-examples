import { component, connect, sequence } from 'redux-app';
import { SelectedGladiator } from '../partials';
import { Gladiator } from '../../model';
import { GladiatorsList } from '../partials';

@component
export class GladiatorPage {

    @connect
    public gladiator: SelectedGladiator;

    @connect
    private gladiatorsList: GladiatorsList;

    @sequence
    public save(gladiator: Gladiator): void {
        this.gladiatorsList.addOrUpdate(gladiator);
        this.gladiator.setValue(gladiator);
    }
}