import * as React from 'react';
import { connect } from 'redux-app';
import { syncOn } from '../../syncOn';
import { App, VisibilityFilter, VisibilityFilterValue } from '../state';
import Link from './Link';

class Footer extends React.Component<any> {

    @connect
    public filter: VisibilityFilterValue;

    public render() {
        return <p>
            Show:
            {' '}
            <Link active={this.filter.value === VisibilityFilter.ShowAll} onClick={() => this.filter.setValue(VisibilityFilter.ShowAll)}>
                All
            </Link>
            {', '}
            <Link active={this.filter.value === VisibilityFilter.ShowActive} onClick={() => this.filter.setValue(VisibilityFilter.ShowActive)}>
                Active
            </Link>
            {', '}
            <Link active={this.filter.value === VisibilityFilter.ShowCompleted} onClick={() => this.filter.setValue(VisibilityFilter.ShowCompleted)}>
                Completed
            </Link>
        </p>;
    }
}

export default syncOn((app: App) => app.visibilityFilter.value)(Footer);