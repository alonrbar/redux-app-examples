import { Component, Input } from '@angular/core';
import { Counter } from '../viewModel';

@Component({
    selector: 'app-counter',
    templateUrl: './counter.component.html'
  })
export class CounterComponent {
    @Input() public title: string;
    @Input() public counter: Counter;
}