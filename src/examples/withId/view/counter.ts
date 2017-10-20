import { CounterComponent } from '../viewModel/counter';
import { customElement, bindable } from "aurelia-framework";

@customElement('counter')
export class CounterElement {
    @bindable public title: string;
    @bindable public counter: CounterComponent;
}