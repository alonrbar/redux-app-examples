import * as React from 'react';
import { autoSync } from '../../autoSync';
import { ExampleFrame } from '../../ExampleFrame';
import { AppState } from '../state';

const App: React.SFC<AppState> = (props) => (
    <ExampleFrame title={props.title} subtitle={props.subtitle}>
        <div className="card w-50">
            <div className="card-body">
                <h3>the new stuff</h3>
                <p>{props.status}</p>
                <button onClick={() => props.fetchImage()}>Surprise me!</button>
                &nbsp;
                <button onClick={() => props.doNothing()}>I do nothing...</button>
            </div>
            {props.imageUrl && <img className="card-img-bottom" src={props.imageUrl} />}
        </div>

        <div className="card w-50 mt-3">
            <div className="card-body">
                <h3>old school counter</h3>
                <p>value: {props.counter}</p>
                <button onClick={() => props.increment()}>Increment?</button>
            </div>
        </div>
    </ExampleFrame>
);

const connected = autoSync(AppState)(App);
export { connected as App };