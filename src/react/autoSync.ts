import { ComponentType } from 'react';
import { connect, Omit } from 'react-redux';
import { Constructor, getMethods, ReduxApp } from 'redux-app';

// tslint:disable:callable-types

export type SyncedComponent<TStateProps, TOwnProps extends TStateProps> = ComponentType<Omit<TOwnProps, keyof TStateProps>>;

export interface AutoSyncEnhancer<TStateProps> {    
    <TOwnProps extends TStateProps>(component: ComponentType<TOwnProps>): SyncedComponent<TStateProps, TOwnProps>;
}

export function autoSync<T>(stateType: Constructor<T>): AutoSyncEnhancer<T> {
    return connect(() => {
        const comp = ReduxApp.getComponent(stateType);
        const compMethods = getMethods(comp, true);
        return Object.assign({}, comp, compMethods as any);
    });
}