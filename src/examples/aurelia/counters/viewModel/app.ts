import { component, withId } from 'redux-app';
import { CounterComponent } from './counter';

@component
export class App {
    public title = "counters";
    public subtitle = "a basic example";
    
    public counter1 = new CounterComponent();    
    public counter2 = new CounterComponent();

    public increment() {
        console.log('increment me too!');
    }
}