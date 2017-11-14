import { Component } from '@angular/core';
import { connect } from 'redux-app';
import { GladiatorPage } from '../../viewModel';

@Component({
  selector: 'arena-page',
  templateUrl: './arenaPage.component.html'
})
export class ArenaPageComponent {

  @connect
  public vm: GladiatorPage;
}
