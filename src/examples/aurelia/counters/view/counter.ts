import { customElement, bindable } from "aurelia-framework";
import { Counter } from "../viewModel";

@customElement('counter')
export class CounterElement {
    @bindable public vm: Counter;
}