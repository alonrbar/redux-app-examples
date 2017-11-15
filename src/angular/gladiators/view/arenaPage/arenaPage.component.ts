import { Component } from '@angular/core';
import { connect } from 'redux-app';
import { ArenaPage } from '../../viewModel';

@Component({
  selector: 'arena-page',
  templateUrl: './arenaPage.component.html'
})
export class ArenaPageComponent {

  @connect
  public vm: ArenaPage;

  constructor() {
    this.vm.prepareForFight();
  }
}
