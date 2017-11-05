import { LogLevel, ReduxApp } from 'redux-app';
import { devToolsEnhancer } from 'redux-devtools-extension';
import { App } from '../viewModel';

export class AppView {
    
    public vm: ReduxApp<App>;

    constructor() {
        ReduxApp.options.logLevel = LogLevel.Debug;
        this.vm = new ReduxApp(new App(), devToolsEnhancer(undefined));
    }
}