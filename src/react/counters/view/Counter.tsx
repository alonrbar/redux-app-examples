import * as React from 'react';
import { CounterState } from '../state';

export const Counter: React.SFC<CounterState> = (props) => (
    <div className="card">
        <div className="card-body">
            <h3>{props.value}</h3>
            <button onClick={() => props.increment(props.id)}>Increment</button>
        </div>
    </div>
);