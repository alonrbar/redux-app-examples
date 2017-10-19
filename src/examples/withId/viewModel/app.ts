import { component, withId } from 'redux-app';
import { CounterComponent } from './counter';

@component
export class App {
    public message = "redux-app - withID";
    
    @withId(8)
    public counter1 = new CounterComponent();
    @withId()
    public counter2 = new CounterComponent();
    @withId(8)
    public counter3 = new CounterComponent();
    @withId()
    public counter4 = new CounterComponent();
}