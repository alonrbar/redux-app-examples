import { component, connect, sequence } from 'redux-app';
import { Banner, Gladiator } from '../../model';
import { Value } from '../common';
import { GladiatorRepository, SelectedGladiator } from '../partials';

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

    //
    // public methods
    //

    public reset(): void {
        this.tempGladiator.setValue(this.selectedGladiator.value);
    }

    @sequence
    public save(): void {
        this.repo.addOrUpdate(this.tempGladiator.value);
        this.selectedGladiator.setValue(this.tempGladiator.value);
    }

    @sequence
    public nextBadge() {
        const banner = Banner.nextBanner(this.tempGladiator.value.banner);
        this.tempGladiator.updateValue({ banner });
    }

    @sequence
    public prevBadge() {
        const banner = Banner.prevBanner(this.tempGladiator.value.banner);
        this.tempGladiator.updateValue({ banner });
    }
}