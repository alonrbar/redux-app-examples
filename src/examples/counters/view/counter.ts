import { customElement, bindable } from "aurelia-framework";
import { Counter } from "../model/counter";

@customElement('counter')
export class CounterElement {

    //
    // Advanced Note: 
    //
    // In Aurelia, methods and callbacks bound to @bindable properties are
    // executed with the receiving element used as their 'this' argument. This
    // poses a problem to some advanced features of redux-app such as the withId
    // decorator. There are several solutions to this and you can find one
    // recommended usage pattern in the other examples.
    //
    // Also note that for the reasons portrayed above ReduxApp will emit a
    // warning about situations like this when setting ReduxApp.options.logLevel
    // to LogLevel.Debug or above.
    //

    @bindable public counter: Counter;    
    @bindable public increment: () => void;
}