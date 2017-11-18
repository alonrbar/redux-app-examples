import { customElement } from 'aurelia-framework';
import { connect, LogLevel, ReduxApp } from 'redux-app';
import { devToolsEnhancer } from 'redux-devtools-extension';
import { GladiatorsApp, Route } from '../viewModel';
import './app.css';

export class AppComponent {

  public Route = Route;

  @connect
  public vm: GladiatorsApp;
}