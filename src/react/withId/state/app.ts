import { withId } from 'redux-app';
import { CounterState } from './counter';

export class AppState {
    public title = "counters with identity";
    public subtitle = "using the withId decorator, a \"mini ORM\" feature";
    
    @withId(8)
    public counter1 = new CounterState();
    @withId()
    public counter2 = new CounterState();
    @withId(8)
    public counter3 = new CounterState();
    @withId()
    public counter4 = new CounterState();
}