import { customElement, bindable } from "aurelia-framework";

@customElement('counter')
export class CounterElement {
    @bindable public counter: any;
}