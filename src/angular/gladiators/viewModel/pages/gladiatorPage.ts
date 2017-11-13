import { component, connect, sequence } from 'redux-app';
import { Banner, Gladiator } from '../../model';
import { Value } from '../common';
import { GladiatorRepository, SelectedGladiator } from '../partials';
import { Router, Route } from '../router';

@component
export class GladiatorPage {

    //
    // public members
    //    

    public tempGladiator = new Value<Gladiator>();

    //
    // private members
    //

    @connect
    private selectedGladiator: SelectedGladiator;

    @connect
    private repo: GladiatorRepository;

    @connect
    private router: Router;

    //
    // public methods
    //    

    @sequence
    public goBack(): void {
       this.router.navigateTo(Route.MainPage);
    }

    public reset(): void {
        this.tempGladiator.setValue(this.selectedGladiator.value);
    }

    @sequence
    public save(): void {
        this.repo.addOrUpdate(this.tempGladiator.value);
        this.selectedGladiator.setValue(this.tempGladiator.value);
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
}