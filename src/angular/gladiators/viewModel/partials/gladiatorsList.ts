import { component, sequence } from 'redux-app';
import { Gladiator } from '../../model';

@component
export class GladiatorsList {
    
    public gladiators: Gladiator[] = [new Gladiator({ name: "Maximus" })];

    public add(gladiator: Gladiator): void {
        this.gladiators = this.gladiators.concat(gladiator);
    }

    public update(gladiator: Gladiator): void {
        this.gladiators = this.gladiators.map(g => {
            if (g.id === gladiator.id) {
                return Object.assign({}, g, gladiator);
            } else {
                return g;
            }
        });
    }

    @sequence
    public addOrUpdate(gladiator: Gladiator): void {
        if (this.gladiators.find(g => g.id === gladiator.id)) {
            this.update(gladiator);
        } else {
            this.add(gladiator);
        }
    }
}