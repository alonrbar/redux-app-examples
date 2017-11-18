import { customElement } from 'aurelia-framework';
import { connect } from 'redux-app';
import { MainPage } from '../../viewModel';
import './mainPage.css';

@customElement('main-page')
export class MainPageComponent {

  @connect
  public vm: MainPage;  
}
