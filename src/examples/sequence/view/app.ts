import { LogLevel, ReduxApp } from 'redux-app';
import { devToolsEnhancer } from 'redux-devtools-extension';
import { App as AppViewModel } from '../viewModel/app';

export class App {
    
    public vm: ReduxApp<AppViewModel>;

    constructor() {
        ReduxApp.options.logLevel = LogLevel.Debug;
        this.vm = new ReduxApp(new AppViewModel(), devToolsEnhancer(undefined));
    }
}