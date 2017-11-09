import { component, sequence } from 'redux-app';

export enum Route {
    MainPage,
    GladiatorPage,
    ArenaPage
}

@component
export class Router {
    public isNavigating = false;
    public currentRoute = Route.MainPage;

    @sequence
    public navigateTo(route: Route): void {
        this.setIsNavigating(true);

        // emulate some async page loading process
        setTimeout(() => {
            this.routeLoaded(route);
        }, 1500);
    }

    private setIsNavigating(value: boolean): void {
        this.isNavigating = value;
    }

    private routeLoaded(value: Route): void {
        this.currentRoute = value;
        this.isNavigating = false;
    }
}