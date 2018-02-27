import { CounterState } from './counter';

export class AppState {
    public title = "counters";
    public subtitle = "a basic example";
    
    public counter1 = new CounterState();    
    public counter2 = new CounterState();
}