import { customElement, bindable } from "aurelia-framework";
import { CounterComponent } from "../viewModel/counter";

@customElement('counter')
export class CounterElement {
    @bindable public vm: CounterComponent;
}