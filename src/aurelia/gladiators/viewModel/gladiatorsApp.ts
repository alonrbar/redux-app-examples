import { component } from 'redux-app';
import { Gladiator } from '../model';
import { ArenaPage, GladiatorPage, MainPage } from './pages';
import { GladiatorsList, SelectedGladiator } from './partials';
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
        gladiatorsList: new GladiatorsList([new Gladiator(), new Gladiator()]),
        selectedGladiator: new SelectedGladiator()
    };
}