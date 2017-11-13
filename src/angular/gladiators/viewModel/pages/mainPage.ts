import { component, connect, sequence, computed } from 'redux-app';
import { Gladiator } from '../../model';
import { SelectedGladiator, GladiatorRepository } from '../partials';
import { Route, Router } from '../router';

@component
export class MainPage {

    // public props

    @connect
    public selectedGladiator: SelectedGladiator;

    @connect
    public gladiatorsRepo: GladiatorRepository;

    @computed
    public get topGladiators(): Gladiator[] {
        var top = this.gladiatorsRepo.items.slice();
        top.sort((a, b) => a.wins - b.wins);
        return top.slice(0, 3);
    }

    // private props

    @connect
    private router: Router;

    // methods

    @sequence
    public goToGladiatorPage(gladiator: Gladiator) {
        this.selectedGladiator.setValue(gladiator);
        this.router.navigateTo(Route.GladiatorPage);
    }

    @sequence
    public newGladiator(): void {
        this.goToGladiatorPage(new Gladiator());
    }
}