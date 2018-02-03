import * as React from 'react';
import { CounterState } from '../state';

export const Counter: React.SFC<CounterState & { title: string }> = (props) => (
    <div className="card">
        <div className="card-body">
            {props.title && <h4 className="card-title mb-4">{props.title}</h4>}
            <h3>{props.value}</h3>
            <button onClick={() => props.increment()}>Increment</button>
        </div>
    </div>
);