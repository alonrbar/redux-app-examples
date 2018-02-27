import * as React from 'react';
import { autoSync } from '../../autoSync';
import { AppState, VisibilityFilter, VisibilityFilterValue } from '../state';
import Link from './Link';

const Footer: React.SFC<VisibilityFilterValue> = (props) => (<p>
    Show:
    {' '}
    <Link active={props.value === VisibilityFilter.ShowAll} onClick={() => props.setValue(VisibilityFilter.ShowAll)}>
        All
    </Link>
    {', '}
    <Link active={props.value === VisibilityFilter.ShowActive} onClick={() => props.setValue(VisibilityFilter.ShowActive)}>
        Active
    </Link>
    {', '}
    <Link active={props.value === VisibilityFilter.ShowCompleted} onClick={() => props.setValue(VisibilityFilter.ShowCompleted)}>
        Completed
    </Link>
</p>
);

const connected = autoSync(VisibilityFilterValue)(Footer);
export { connected as Footer };