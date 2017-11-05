require('./polyfill');
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { LogLevel, ReduxApp } from 'redux-app';
import { devToolsEnhancer } from 'redux-devtools-extension';
import { App } from './view-model/app';
import { AppModule } from './view/app.module';

//
// bootstrap the view-model
//

ReduxApp.options.logLevel = LogLevel.Debug;
const app = ReduxApp.createApp(new App(), devToolsEnhancer(undefined));

//
// bootstrap angular
//

platformBrowserDynamic().bootstrapModule(AppModule);