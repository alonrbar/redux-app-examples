import { ComponentType } from 'react';
import { connect, Omit } from 'react-redux';
import { ReduxApp } from 'redux-app';

// tslint:disable:ban-types callable-types unified-signatures

export function getMethods(obj: object | Function) {
    if (!obj)
        return undefined;

    var proto: any;
    if (typeof obj === 'object') {
        proto = Object.getPrototypeOf(obj);
    } else if (typeof obj === 'function') {
        proto = obj.prototype;
    } else {
        throw new Error("Expected an object or a function. Got: " + obj);
    }

    if (!proto)
        return undefined;

    var methods: any = {};
    for (let key of Object.keys(proto)) {

        // avoid invoking getters
        var desc = Object.getOwnPropertyDescriptor(proto, key);
        var hasGetter = desc && typeof desc.get === 'function';

        if (!hasGetter && typeof proto[key] === 'function')
            methods[key] = proto[key].bind(obj);
    }

    return methods;
}

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
        return Object.assign({}, comp, getMethods(comp));
    }) as any;
}