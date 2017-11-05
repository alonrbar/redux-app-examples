import { PLATFORM, viewResources } from 'aurelia-framework';
import { LogLevel, ReduxApp } from 'redux-app';
import { devToolsEnhancer } from 'redux-devtools-extension';
import { App } from '../viewModel';

@viewResources(PLATFORM.moduleName('./counter'))
export class AppView {
    
    public vm: ReduxApp<App>;

    constructor() {
        ReduxApp.options.logLevel = LogLevel.Debug;
        this.vm = new ReduxApp(new App(), devToolsEnhancer(undefined));
    }
}