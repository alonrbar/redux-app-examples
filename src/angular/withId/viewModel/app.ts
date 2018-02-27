import { withId } from 'redux-app';
import { Counter } from './counter';

export class App {
    public title = "counters with identity";
    public subtitle = "using the withId decorator, a \"mini ORM\" feature";
    
    @withId(8)
    public counter1 = new Counter();
    @withId()
    public counter2 = new Counter();
    @withId(8)
    public counter3 = new Counter();
    @withId()
    public counter4 = new Counter();
}