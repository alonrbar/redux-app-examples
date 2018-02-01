import { component, computed, connect, sequence } from 'redux-app';
import { Gladiator } from '../../model';
import { GladiatorsList, SelectedGladiator } from '../partials';
import { Route, Router } from '../router';

@component
export class MainPageState {

    //
    // public props
    //    

    @connect
    public gladiatorsList: GladiatorsList;

    @computed
    public get topGladiators(): Gladiator[] {
        var top = this.gladiatorsList.items.slice();
        top.sort((a, b) => b.wins - a.wins);
        return top.slice(0, 3);
    }

    //
    // private props
    //

    @connect
    private selectedGladiator: SelectedGladiator;

    @connect
    private router: Router;

    //
    // methods
    //

    @sequence
    public goToGladiatorPage(gladiator: Gladiator) {
        this.selectedGladiator.setValue(gladiator);
        this.router.navigateTo(Route.GladiatorPage);
    }

    @sequence
    public toTheArena() {
        this.router.navigateTo(Route.ArenaPage);
    }

    @sequence
    public newGladiator(): void {
        const newGladiator = new Gladiator();
        this.gladiatorsList.add(newGladiator);
        this.goToGladiatorPage(newGladiator);
    }

    @sequence
    public generateGladiators(): void {
        const newGladiators = [];
        for (let i = 0; i < 5; i++) {
            newGladiators.push(new Gladiator());
        }

        this.gladiatorsList.add(newGladiators);
    }
}