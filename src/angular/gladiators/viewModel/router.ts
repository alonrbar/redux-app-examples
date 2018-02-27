import { action } from 'redux-app';

export enum Route {
    MainPage,
    GladiatorPage,
    ArenaPage
}

export class Router {
    public currentRoute = Route.MainPage;

    @action
    public navigateTo(route: Route): void {
        this.currentRoute = route;
    }
}