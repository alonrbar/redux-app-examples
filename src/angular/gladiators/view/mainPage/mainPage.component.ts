import { Component } from '@angular/core';
import { ReduxApp } from 'redux-app';
import { MainPage } from '../../viewModel';
import './mainPage.component.css';

@Component({
  selector: 'main-page',
  templateUrl: './mainPage.component.html'
})
export class MainPageComponent {

  public vm = ReduxApp.getComponent(MainPage);
}
