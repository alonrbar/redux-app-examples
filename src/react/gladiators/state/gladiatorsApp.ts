import { Gladiator } from '../model';
import { ArenaPageState, GladiatorPageState, MainPageState } from './pages';
import { GladiatorsList, SelectedGladiator } from './partials';
import { Router } from './router';

export class GladiatorsAppState {

    public router = new Router();

    public mainPage: MainPageState;
    public gladiatorPage: GladiatorPageState;
    public arenaPage: ArenaPageState;

    public partials = {
        gladiatorsList: new GladiatorsList([new Gladiator(), new Gladiator()]),
        selectedGladiator: new SelectedGladiator()
    };

    constructor() {
        // using poor man's dependency injection here.
        // about DI: https://en.wikipedia.org/wiki/Dependency_injection
        // js DI containers: https://www.npmjs.com/search?q=dependency+injection
        this.mainPage = new MainPageState(this.partials.gladiatorsList, this.partials.selectedGladiator, this.router);
        this.gladiatorPage = new GladiatorPageState(this.partials.selectedGladiator, this.partials.gladiatorsList, this.router);
        this.arenaPage = new ArenaPageState(this.partials.gladiatorsList, this.router);
    }
}