import { component, connect, sequence } from 'redux-app';
import { Gladiator } from '../../model';
import { activeGladiatorsFilter, FilteredGladiatorsList, inactiveGladiatorsFilter, SelectedGladiator } from '../partials';
import { Route, Router } from '../router';

@component
export class MainPage {
    
    // public props

    public activeGladiators = new FilteredGladiatorsList(true);
    public inactiveGladiators = new FilteredGladiatorsList(false);    

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