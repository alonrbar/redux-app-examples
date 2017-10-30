require('core-js/fn/reflect');
import { bootstrap } from 'aurelia-bootstrapper';
import { Aurelia, PLATFORM } from 'aurelia-framework';
import 'aurelia-loader-webpack';
import { LogLevel, ReduxApp } from 'redux-app';
import { devToolsEnhancer } from 'redux-devtools-extension';
import { App } from './view-model/app';

//
// bootstrap the view-model
//

ReduxApp.options.logLevel = LogLevel.Debug;
const app = ReduxApp.createApp(new App(), devToolsEnhancer(undefined));

//
// bootstrap Aurelia
//

bootstrap((aurelia: Aurelia) => {

    aurelia.use
        .standardConfiguration()
        .developmentLogging();

    aurelia.start()
    .then(() => aurelia.setRoot(PLATFORM.moduleName('examples/todo/view/app'), document.body));
});