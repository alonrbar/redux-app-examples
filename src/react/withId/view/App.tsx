import * as React from 'react';
import { autoSync } from '../../autoSync';
import { ExampleFrame } from '../../ExampleFrame';
import { AppState } from '../state';
import { Counter } from './Counter';

const App: React.SFC<AppState> = (props) => (
    <ExampleFrame title={props.title} subtitle={props.subtitle}>
        <div className="row">
            <div className="w-100 m-3">
                <Counter value={props.counter1.value} increment={() => props.counter1.increment()} title="counter 1 - ID = 8 (in sync with counter 3)"></Counter>
            </div>
            <div className="w-100 m-3">
                <Counter value={props.counter2.value} increment={() => props.counter2.increment()} title="counter 2 - ID is auto-generated"></Counter>
            </div>
            <div className="w-100 m-3">
                <Counter value={props.counter3.value} increment={() => props.counter3.increment()} title="counter 3 - ID = 8 (in sync with counter 1)"></Counter>
            </div>
            <div className="w-100 m-3">
                <Counter value={props.counter4.value} increment={() => props.counter4.increment()} title="counter 4 - ID is auto-generated"></Counter>
            </div>
        </div>
    </ExampleFrame>
);

const connected = autoSync(AppState)(App);
export { connected as App };