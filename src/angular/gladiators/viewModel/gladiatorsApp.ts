import { component, connect } from 'redux-app';
import { GladiatorPage, MainPage } from './pages';
import { SelectedGladiator, GladiatorsList } from './partials';
import { Router } from './router';

@component
export class GladiatorsApp {

    public router = new Router();

    public pages = {
        main: new MainPage(),
        gladiatorPage: new GladiatorPage()
    };

    public partials = {
        gladiatorsList: new GladiatorsList(),
        selectedGladiator: new SelectedGladiator()
    };
}