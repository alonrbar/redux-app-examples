import { Component } from '@angular/core';
import { ReduxApp } from 'redux-app';
import { GladiatorPage } from '../../viewModel';
var debounce = require('lodash.debounce');

@Component({
  selector: 'gladiator-page',
  templateUrl: './gladiatorPage.component.html'
})
export class GladiatorPageComponent {

  public nameChanged = debounce((name: string) => {
    this.vm.setName(name);
  }, 300);

  public vm = ReduxApp.getComponent(GladiatorPage);

  constructor() {
    this.vm.reset();
  }
}
