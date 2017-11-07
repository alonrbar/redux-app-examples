require('./polyfill');
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './view/app.module';

platformBrowserDynamic().bootstrapModule(AppModule);