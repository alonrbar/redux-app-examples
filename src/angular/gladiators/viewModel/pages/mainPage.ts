import { component, connect, sequence } from 'redux-app';
import { Gladiator } from '../../model';
import { SelectedGladiator } from '../partials';
import { Route, Router } from '../router';

@component
export class MainPage {
    
    // public props

    @connect
    public selectedGladiator: SelectedGladiator;
    
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