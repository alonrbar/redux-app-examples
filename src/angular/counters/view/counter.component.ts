import { Counter } from "../viewModel/counter";
import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-counter',
    templateUrl: './counter.component.html'
  })
export class CounterComponent {
    @Input() public vm: Counter;
}