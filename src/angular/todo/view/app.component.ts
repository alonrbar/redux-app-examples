import { Component } from '@angular/core';
import { connect, ReduxApp } from 'redux-app';
import { devToolsEnhancer } from 'redux-devtools-extension';
import { App } from '../view-model';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent {

    public app = new ReduxApp(new App(), devToolsEnhancer(undefined));
}