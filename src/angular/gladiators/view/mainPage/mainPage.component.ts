import { Component } from '@angular/core';
import { connect } from 'redux-app';
import { MainPage } from '../../viewModel';

@Component({
  selector: 'main-page',
  templateUrl: './mainPage.component.html'
})
export class MainPageComponent {

  @connect
  public vm: MainPage;
}