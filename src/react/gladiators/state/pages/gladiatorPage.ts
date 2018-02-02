import { component, computed, connect, sequence, withId } from 'redux-app';
import { Banner, Gladiator } from '../../model';
import { Value } from '../common';
import { GladiatorsList, SelectedGladiator } from '../partials';
import { Route, Router } from '../router';

@component
export class GladiatorPageState {

    //
    // public members
    //    

    public showStatus = false;

    @computed
    public get tempGladiator() {
        return this._tempGladiator.value;
    }

    @withId
    private _tempGladiator = new Value<Gladiator>();

    //
    // private members
    //

    @connect
    private selectedGladiator: SelectedGladiator;

    @connect
    private list: GladiatorsList;

    @connect
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
        this._tempGladiator.setValue(gladiatorClone);
    }

    @sequence
    public setName(name: string): void {
        this._tempGladiator.updateValue({ name });
    }

    @sequence
    public nextBanner() {
        const banner = Banner.nextBanner(this._tempGladiator.value.banner);
        this._tempGladiator.updateValue({ banner });
    }

    @sequence
    public prevBanner() {
        const banner = Banner.prevBanner(this._tempGladiator.value.banner);
        this._tempGladiator.updateValue({ banner });
    }

    @sequence
    public save(): void {
        this.list.update(this._tempGladiator.value);
        this.selectedGladiator.setValue(this._tempGladiator.value);
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

    public toggleStatus(on: boolean) {
        this.showStatus = on;
    }
}