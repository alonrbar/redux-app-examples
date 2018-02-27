import { Component } from '@angular/core';
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

  // @connect
  public vm: GladiatorPage;

  constructor() {
    this.vm.reset();
  }
}
