import { customElement, bindable } from "aurelia-framework";
import { Counter } from "../viewModel/counter";

@customElement('counter')
export class CounterElement {
    @bindable public vm: Counter;
}