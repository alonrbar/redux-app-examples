import { action, ignoreState, sequence } from 'redux-app';
import { Gladiator } from '../../model';
import { GladiatorsList, SelectedGladiator } from '../partials';
import { Route, Router } from '../router';

export class MainPage {

    //
    // public props
    //    

    public gladiatorsList: GladiatorsList;

    public get topGladiators(): Gladiator[] {
        var top = this.gladiatorsList.items.slice();
        top.sort((a, b) => b.wins - a.wins);
        return top.slice(0, 3);
    }

    //
    // private props
    //

    private selectedGladiator: SelectedGladiator;
    @ignoreState private router: Router;

    constructor(list: GladiatorsList, selectedGladiator: SelectedGladiator, router: Router) {
        this.gladiatorsList = list;
        this.selectedGladiator = selectedGladiator;
        this.router = router;
    }

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