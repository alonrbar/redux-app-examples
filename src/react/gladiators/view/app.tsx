import * as React from 'react';
import { connect, LogLevel, ReduxApp } from 'redux-app';
import { devToolsEnhancer } from 'redux-devtools-extension';
import { autoSync } from '../../autoSync';
import { ExampleFrame } from '../../ExampleFrame';
import { Route, Router } from '../state';
import './app.css';
import { ArenaPage } from './ArenaPage';
import { GladiatorPage } from './GladiatorPage';
import { MainPage } from './MainPage';

const App: React.SFC<Router> = (props) => (
  <ExampleFrame title="Gladiators" subtitle="A real world application">
    <div className="card mt-5 w-100 p-3">

      {/* our primitive router */}
      {props.currentRoute === Route.MainPage && <MainPage />}
      {props.currentRoute === Route.GladiatorPage && <GladiatorPage />}
      {props.currentRoute === Route.ArenaPage && <ArenaPage />}

    </div>
  </ExampleFrame>
);

const ConnectedApp = autoSync(Router)(App);
export { ConnectedApp as App };