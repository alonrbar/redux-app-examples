import * as React from 'react';
import { autoSync } from '../../autoSync';
import { ExampleFrame } from '../../ExampleFrame';
import { AppState } from '../state';
import { Counter } from './Counter';

const App: React.SFC<AppState> = (props) => (
    <ExampleFrame title={props.title} subtitle={props.subtitle}>
        <div className="row">
            <div className="w-25 m-3">
                <Counter id={props.counter1.id} value={props.counter1.value} increment={num => props.counter1.increment(num)}></Counter>
            </div>
            <div className="w-25 m-3">
                <Counter id={props.counter2.id} value={props.counter2.value} increment={num => props.counter2.increment(num)}></Counter>
            </div>
        </div>
    </ExampleFrame>
);

const connected = autoSync(AppState, false)(App);
export { connected as App };