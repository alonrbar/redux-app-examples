import { Component } from '@angular/core';
import { LogLevel, ReduxApp } from 'redux-app';
import { devToolsEnhancer } from 'redux-devtools-extension';
import { GladiatorsApp, Route } from '../viewModel';
import { Gladiator } from '../model';
import './app.component.css';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  public Route = Route;

  public vm: GladiatorsApp;

  constructor() {
    ReduxApp.options.logLevel = LogLevel.Debug;
    const app = new ReduxApp(new GladiatorsApp(), devToolsEnhancer(undefined));
    this.vm = app.root;
    
    this.populate();
  }

  private populate(): void {
    for (let i = 0; i < 10; i++) {
      const newGladiator = new Gladiator();
      newGladiator.name = "Maximums_asdsdfsdfsdfsdf" + i;
      this.vm.partials.gladiatorsRepo.add(newGladiator);
    }
  }
}
