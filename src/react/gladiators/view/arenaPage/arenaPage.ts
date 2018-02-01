import { customElement } from 'aurelia-framework';
import { connect } from 'redux-app';
import { ArenaPage } from '../../state';

@customElement('arena-page')
export class ArenaPageComponent {

  @connect
  public vm: ArenaPage;

  public attached() {
    this.vm.prepareForFight();
  }
}
