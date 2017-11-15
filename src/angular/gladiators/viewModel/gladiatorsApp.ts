import { component, connect } from 'redux-app';
import { ArenaPage, GladiatorPage, MainPage } from './pages';
import { GladiatorRepository, SelectedGladiator } from './partials';
import { Router } from './router';

@component
export class GladiatorsApp {

    public router = new Router();

    public pages = {
        main: new MainPage(),
        gladiator: new GladiatorPage(),
        arena: new ArenaPage()
    };

    public partials = {
        gladiatorsRepo: new GladiatorRepository(),
        selectedGladiator: new SelectedGladiator()
    };
}