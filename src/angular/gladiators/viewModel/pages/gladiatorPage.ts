import { action, sequence, withId } from 'redux-app';
import { Banner, Gladiator } from '../../model';
import { Value } from '../common';
import { GladiatorsList, SelectedGladiator } from '../partials';
import { Route, Router } from '../router';

export class GladiatorPage {

    //
    // public members
    //    

    public showStatus = false;

    @withId
    public tempGladiator = new Value<Gladiator>();

    //
    // private members
    //

    // @connect
    private selectedGladiator: SelectedGladiator;

    // @connect
    private list: GladiatorsList;

    // @connect
    private router: Router;

    //
    // methods
    //    

    @sequence
    public goBack(): void {
       this.router.navigateTo(Route.MainPage);
    }

    @sequence
    public reset(): void {
        const gladiatorClone = new Gladiator(this.selectedGladiator.value);
        this.tempGladiator.setValue(gladiatorClone);
    }

    @sequence
    public setName(name: string): void {
        this.tempGladiator.updateValue({ name });
    }

    @sequence
    public nextBanner() {
        const banner = Banner.nextBanner(this.tempGladiator.value.banner);
        this.tempGladiator.updateValue({ banner });
    }

    @sequence
    public prevBanner() {
        const banner = Banner.prevBanner(this.tempGladiator.value.banner);
        this.tempGladiator.updateValue({ banner });
    }

    @sequence
    public save(): void {
        this.list.update(this.tempGladiator.value);
        this.selectedGladiator.setValue(this.tempGladiator.value);
        this.toggleStatus(true);
        setTimeout(() => this.toggleStatus(false), 1500);
    }    

    @sequence
    public delete(): void {
        this.list.remove(this.selectedGladiator.value);
        this.goBack();
    }

    //
    // actions
    //

    @action
    public toggleStatus(on: boolean) {
        this.showStatus = on;
    }
}