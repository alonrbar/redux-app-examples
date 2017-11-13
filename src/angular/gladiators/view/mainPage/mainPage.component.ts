import { Component } from '@angular/core';
import { connect } from 'redux-app';
import { MainPage } from '../../viewModel';
import { Gladiator } from '../../model/gladiator';

@Component({
  selector: 'main-page',
  templateUrl: './mainPage.component.html'
})
export class MainPageComponent {

  @connect
  public vm: MainPage;

  public add() {
    const newGladiator = new Gladiator();
    newGladiator.name = "Maximums";
    this.vm.gladiatorsRepo.add(newGladiator);
  }
}
