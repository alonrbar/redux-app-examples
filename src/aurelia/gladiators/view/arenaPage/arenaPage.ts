import { customElement } from 'aurelia-framework';
import { connect } from 'redux-app';
import { ArenaPage } from '../../viewModel';

@customElement('arena-page')
export class ArenaPageComponent {

  @connect
  public vm: ArenaPage;

  public attached() {
    this.vm.prepareForFight();
  }
}
