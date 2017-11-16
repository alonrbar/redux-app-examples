import { Component } from '@angular/core';
import { ReduxApp } from 'redux-app';
import { devToolsEnhancer } from 'redux-devtools-extension';
import { App } from '../../viewModel';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent {

    public app = new ReduxApp(new App(), devToolsEnhancer(undefined));
}