import { Component } from '@angular/core';
import { connect } from 'redux-app';
import { MainPage } from '../../viewModel';
import { Gladiator } from '../../model/gladiator';
import './mainPage.component.css';

@Component({
  selector: 'main-page',
  templateUrl: './mainPage.component.html'
})
export class MainPageComponent {

  @connect
  public vm: MainPage;

  constructor() {
    for (let i = 0; i < 10; i++) {
      const newGladiator = new Gladiator();
      newGladiator.name = "Maximums_" + i;
      this.vm.gladiatorsRepo.add(newGladiator);
    }
  }
}
