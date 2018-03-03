import { Gladiator } from '../model';
import { ArenaPage, GladiatorPage, MainPage } from './pages';
import { GladiatorsList, SelectedGladiator } from './partials';
import { Router } from './router';

export class GladiatorsApp {

    public router = new Router();

    public mainPage: MainPage;
    public gladiatorPage: GladiatorPage;
    public arenaPage: ArenaPage;

    public partials = {
        gladiatorsList: new GladiatorsList([new Gladiator(), new Gladiator()]),
        selectedGladiator: new SelectedGladiator()
    };

    constructor() {
        // using poor man's dependency injection here.
        // about DI: https://en.wikipedia.org/wiki/Dependency_injection
        // js DI containers: https://www.npmjs.com/search?q=dependency+injection
        this.mainPage = new MainPage(this.partials.gladiatorsList, this.partials.selectedGladiator, this.router);
        this.gladiatorPage = new GladiatorPage(this.partials.selectedGladiator, this.partials.gladiatorsList, this.router);
        this.arenaPage = new ArenaPage(this.partials.gladiatorsList, this.router);
    }
}