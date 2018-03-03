import { connect } from 'react-redux';
import { Constructor, getMethods, ReduxApp } from 'redux-app';

export function autoSync<T>(stateType: Constructor<T>, pure = true) {
    return connect<T>(() => {
        const comp = ReduxApp.getComponent(stateType);
        const compMethods = getMethods(comp, true);
        return Object.assign({}, comp, compMethods);
    }, null, null, { pure });
}