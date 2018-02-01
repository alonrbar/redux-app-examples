import { customElement } from 'aurelia-framework';
import * as React from 'react';
import { connect, LogLevel, ReduxApp } from 'redux-app';
import { devToolsEnhancer } from 'redux-devtools-extension';
import { autoSync } from '../../autoSync';
import { ExampleFrame } from '../../ExampleFrame';
import { GladiatorsAppState, Route } from '../state';
import './app.css';
import { MainPage } from './mainPage';

@autoSync(GladiatorsAppState)
export class App extends React.Component {

  public Route = Route;

  @connect
  public vm: GladiatorsAppState;

  public render() {
    return (
      <ExampleFrame title="Gladiators" subtitle="A real world application">
        <div className="card mt-5 w-100 p-3">

          {/* our primitive router */}
          {this.vm.router.currentRoute === Route.MainPage && <MainPage />}
          {/* <gladiator-page if.bind="vm.router.currentRoute === Route.GladiatorPage"></gladiator-page>
          <arena-page if.bind="vm.router.currentRoute === Route.ArenaPage"></arena-page> */}

        </div>
      </ExampleFrame>
    );
  }
}