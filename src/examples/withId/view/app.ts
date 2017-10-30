import { PLATFORM, viewResources } from 'aurelia-framework';
import { LogLevel, ReduxApp } from 'redux-app';
import { devToolsEnhancer } from 'redux-devtools-extension';
import { App as AppViewModel } from '../viewModel/app';

@viewResources(PLATFORM.moduleName('examples/withId/view/counter'))
export class App {
    
    public vm: ReduxApp<AppViewModel>;

    constructor() {
        ReduxApp.options.logLevel = LogLevel.Debug;
        this.vm = new ReduxApp(new AppViewModel(), undefined, new AppViewModel(), devToolsEnhancer(undefined));
    }
}