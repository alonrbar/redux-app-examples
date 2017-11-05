import { bindable, customElement } from 'aurelia-framework';
import { Counter } from '../viewModel';

@customElement('counter')
export class CounterElement {
    @bindable public title: string;
    @bindable public counter: Counter;
}