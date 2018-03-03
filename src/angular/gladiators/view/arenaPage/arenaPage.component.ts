import { Component } from '@angular/core';
import { ReduxApp } from 'redux-app';
import { ArenaPage } from '../../viewModel';

@Component({
  selector: 'arena-page',
  templateUrl: './arenaPage.component.html'
})
export class ArenaPageComponent {

  public vm = ReduxApp.getComponent(ArenaPage);

  constructor() {
    this.vm.prepareForFight();
  }
}
