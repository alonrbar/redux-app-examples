import { customElement, bindable } from "aurelia-framework";

@customElement('counter')
export class CounterElement {
    @bindable public value: number;
    @bindable public increment: Function;
}