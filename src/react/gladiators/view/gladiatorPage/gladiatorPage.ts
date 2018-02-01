import { customElement } from 'aurelia-framework';
import { connect } from 'redux-app';
import { GladiatorPage } from '../../state';
var debounce = require('lodash.debounce');

@customElement('gladiator-page')
export class GladiatorPageComponent {

  public nameChanged = debounce((e: Event) => {
    // https://stackoverflow.com/a/42845938/999461
    this.vm.setName((e.target as HTMLInputElement).value);
  }, 300);

  @connect
  public vm: GladiatorPage;

  public attached() {
    this.vm.reset();
  }
}
