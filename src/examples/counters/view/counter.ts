import { customElement, bindable } from "aurelia-framework";
import { Counter } from "../model/counter";

@customElement('counter')
export class CounterElement {

    //
    // Note: 
    //
    // Binding each part of the component separately is not recommended as some
    // advanced features of redux-app won't work. It's done here for to show one
    // possible usage pattern, you can find a more recommended usage pattern in
    // the other examples.
    //
    // Also note that for the reasons portrayed above ReduxApp will emit a
    // warning about situations like this when setting ReduxApp.options.logLevel to
    // LogLevel.Debug or above.
    //

    @bindable public counter: Counter;    
    @bindable public increment: () => void;
}