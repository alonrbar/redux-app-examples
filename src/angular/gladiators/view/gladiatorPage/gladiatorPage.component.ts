import { Component } from '@angular/core';
import { connect } from 'redux-app';
import { GladiatorPage } from '../../viewModel';
var debounce = require('lodash.debounce');

@Component({
  selector: 'gladiator-page',
  templateUrl: './gladiatorPage.component.html'
})
export class GladiatorPageComponent {

  public nameChanged = debounce((name: string) => {
    // https://stackoverflow.com/a/42845938/999461
    this.vm.setName(name);
  }, 300);

  @connect
  public vm: GladiatorPage;

  constructor() {
    this.vm.reset();
  }
}
