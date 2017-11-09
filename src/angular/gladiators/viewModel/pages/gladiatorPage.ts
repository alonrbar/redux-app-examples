import { component, connect, noDispatch, sequence } from 'redux-app';
import { Gladiator } from '../../model';
import { modulo } from '../../utils';
import { GladiatorsList, SelectedGladiator } from '../partials';

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

    @sequence
    public nextBadge() {
        const badge = modulo(this.gladiator.value.badge + 1, 21);
        this.gladiator.update({ badge });
    }

    @noDispatch
    public prevBadge() {
        const badge = modulo(this.gladiator.value.badge - 1, 21);
        this.gladiator.update({ badge });
    }
}