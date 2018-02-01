import * as React from 'react';
import { connect, LogLevel, ReduxApp } from 'redux-app';
import { devToolsEnhancer } from 'redux-devtools-extension';
import { autoSync } from '../../autoSync';
import { ExampleFrame } from '../../ExampleFrame';
import { GladiatorsAppState, Route, Router } from '../state';
import './app.css';
import { ArenaPage } from './arenaPage';
import { GladiatorPage } from './gladiatorPage';
import { MainPage } from './mainPage';

@autoSync(Router)
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
          {this.vm.router.currentRoute === Route.GladiatorPage && <GladiatorPage />}
          {this.vm.router.currentRoute === Route.ArenaPage && <ArenaPage />}

        </div>
      </ExampleFrame>
    );
  }
}