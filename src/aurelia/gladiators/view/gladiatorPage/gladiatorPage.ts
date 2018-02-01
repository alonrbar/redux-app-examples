import { customElement } from 'aurelia-framework';
import { connect } from 'redux-app';
import { GladiatorPage } from '../../viewModel';
var debounce = require('lodash.debounce');

@customElement('gladiator-page')
export class GladiatorPageComponent {

  public nameChanged = debounce((e: Event) => {
    this.vm.setName((e.target as HTMLInputElement).value);
  }, 300);

  @connect
  public vm: GladiatorPage;

  public attached() {
    this.vm.reset();
  }
}
