import { customElement, bindable } from "aurelia-framework";
import { connect } from 'redux-app';

@customElement('counter')
export class CounterElement {
    @bindable public title: string;
    // @connect public counter: CounterComponent;
}