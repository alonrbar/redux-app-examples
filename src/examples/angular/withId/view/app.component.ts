import { Component } from '@angular/core';
import { LogLevel, ReduxApp } from 'redux-app';
import { devToolsEnhancer } from 'redux-devtools-extension';
import { App } from '../viewModel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  public vm: ReduxApp<App>;

  constructor() {
    ReduxApp.options.logLevel = LogLevel.Debug;
    this.vm = new ReduxApp(new App(), devToolsEnhancer(undefined));
  }
}
