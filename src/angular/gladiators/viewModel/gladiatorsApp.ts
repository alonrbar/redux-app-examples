import { component, connect } from 'redux-app';
import { GladiatorPage, MainPage } from './pages';
import { SelectedGladiator, GladiatorRepository } from './partials';
import { Router } from './router';

@component
export class GladiatorsApp {

    public router = new Router();

    public pages = {
        main: new MainPage(),
        gladiator: new GladiatorPage()
    };

    public partials = {
        gladiatorsRepo: new GladiatorRepository(),
        selectedGladiator: new SelectedGladiator()
    };
}