import { component } from 'redux-app';
import { Gladiator } from '../model';
import { ArenaPage, GladiatorPage, MainPageState } from './pages';
import { GladiatorsList, SelectedGladiator } from './partials';
import { Router } from './router';

@component
export class GladiatorsAppState {

    public router = new Router();

    public pages = {
        main: new MainPageState(),
        gladiator: new GladiatorPage(),
        arena: new ArenaPage()
    };

    public partials = {
        gladiatorsList: new GladiatorsList([new Gladiator(), new Gladiator()]),
        selectedGladiator: new SelectedGladiator()
    };
}