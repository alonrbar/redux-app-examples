import { component, withId } from 'redux-app';
import { Counter } from './counter';

@component
export class App {
    public title = "counters";
    public subtitle = "a basic example";
    
    public counter1 = new Counter();    
    public counter2 = new Counter();

    public increment() {
        console.log('increment me too!');
    }
}