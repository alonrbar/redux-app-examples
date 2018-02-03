import { component } from 'redux-app';
import { CounterState } from './counter';

@component
export class AppState {
    public title = "counters";
    public subtitle = "a basic example";
    
    public counter1 = new CounterState();    
    public counter2 = new CounterState();

    public increment() {
        console.log('increment me too!');
    }
}