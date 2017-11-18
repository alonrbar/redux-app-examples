import { component } from 'redux-app';

export enum Route {
    MainPage,
    GladiatorPage,
    ArenaPage
}

@component
export class Router {
    public currentRoute = Route.MainPage;

    public navigateTo(route: Route): void {
        this.currentRoute = route;
    }
}