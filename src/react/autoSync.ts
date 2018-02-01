import { connect } from 'react-redux';
import { ReduxApp } from 'redux-app';

// tslint:disable:ban-types

interface IComponentState {
    _v: number;
    _component: any;
}

function autoSync<T extends Function>(componentType: T): ClassDecorator {
    let state: IComponentState = {
        _v: 0,
        _component: undefined
    };

    return connect(() => {
        
        // get component
        const comp = ReduxApp.getComponent(componentType);
        state = Object.assign({}, state, { _component: comp });

        // check for changes
        const isChanged = ReduxApp.wasComponentChanged(comp);
        if (isChanged) {
            state = Object.assign({}, state, { _v: state._v + 1 });
            return state;
        } else {
            return state;
        }
        
    }) as any;
}

export { autoSync };