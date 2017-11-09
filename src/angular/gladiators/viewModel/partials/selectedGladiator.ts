import { component } from 'redux-app';
import { Gladiator } from '../../model/gladiator';

@component
export class SelectedGladiator {
    
    public value: Gladiator;

    public setValue(newGladiator: Gladiator): void {
        this.value = newGladiator;
    }

    public update(gladiator: Partial<Gladiator>): void {
        this.value = Object.assign({}, this.value, gladiator);
    }
}