import 'reflect-metadata';
import { bootstrap } from 'aurelia-bootstrapper';
import { Aurelia, PLATFORM } from 'aurelia-framework';
import 'aurelia-loader-webpack';
import { LogLevel, ReduxApp } from 'redux-app';
import { devToolsEnhancer } from 'redux-devtools-extension';
import { GladiatorsApp } from './viewModel/gladiatorsApp';

//
// bootstrap the view-model
//

ReduxApp.options.logLevel = LogLevel.Debug;
ReduxApp.createApp(new GladiatorsApp(), devToolsEnhancer(undefined));

//
// bootstrap Aurelia
//

bootstrap((aurelia: Aurelia) => {

    aurelia.use
        .standardConfiguration()
        .developmentLogging();

    aurelia.start()
    .then(() => aurelia.setRoot(PLATFORM.moduleName('aurelia/gladiators/view/app'), document.body));
});