import { ComponentType } from 'react';
import { connect, Omit } from 'react-redux';
import { ReduxApp, getMethods } from 'redux-app';

// tslint:disable:ban-types callable-types unified-signatures

export interface Constructor<T> {
    new(...args: any[]): T;
}

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