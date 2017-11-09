import { Component } from '@angular/core';
import { connect } from 'redux-app';
import { GladiatorPage } from '../../viewModel';

@Component({
  selector: 'gladiator-page',
  templateUrl: './gladiatorPage.component.html'
})
export class GladiatorPageComponent {

  @connect
  public vm: GladiatorPage;
}